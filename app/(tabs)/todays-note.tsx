import { MOODS, MoodId } from "@/constants/moods";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { textStyles } from "@/theme/textStyles";
import { MoodButton } from "@/ui/MoodButton";
import { NoteType, NoteTypePicker } from "@/ui/NoteTypePicker";
import { PrimaryButton } from "@/ui/PrimaryButton";
import { useMemo, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { saveTodaysNote } from "../utils/storage";

export default function TodaysNoteScreen() {
  const [mood, setMood] = useState<MoodId | null>(null);
  const [noteType, setNoteType] = useState<NoteType>("planning");
  const [text, setText] = useState("");

  const placeholder = useMemo(() => {
    switch (noteType) {
      case "ordinary":
        return "just an ordinary note";
      case "rant":
        return "rant away!";
      case "planning":
        return "put on your planning glasses";
      case "feel":
        return "feel those feelings.";
    }
  }, [noteType]);

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={[textStyles.h3, styles.centerTitle]}>
          Today&apos;s feeling
        </Text>

        <View style={styles.moodsGridRow}>
          {MOODS.slice(0, 3).map((m) => (
            <MoodButton
              key={m.id}
              image={m.image}
              selected={mood === m.id}
              onPress={() => setMood(m.id)}
            />
          ))}
        </View>
        <View style={styles.moodsGridRow}>
          {MOODS.slice(3, 7).map((m) => (
            <MoodButton
              key={m.id}
              image={m.image}
              selected={mood === m.id}
              onPress={() => setMood(m.id)}
            />
          ))}
        </View>

        <View style={{ height: spacing.xl }} />

        {/* Dagens datum */}
        <Text
          style={[
            textStyles.body,
            { textAlign: "left", marginBottom: spacing.xs },
          ]}
        >
          {new Date().toLocaleDateString("en-EN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>

        <Text style={textStyles.h1}>Today&apos;s note</Text>

        <View style={{ height: spacing.md }} />

        <NoteTypePicker value={noteType} onChange={setNoteType} />

        <View style={{ height: spacing.md }} />

        <View style={styles.inputCard}>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder={placeholder}
            placeholderTextColor={colors.mutedText}
            multiline
            textAlignVertical="top"
            style={styles.input}
          />
        </View>

        <View style={{ height: spacing.lg }} />
        <View style={styles.saveRow}>
          <Text style={styles.saveHint}>
            <PrimaryButton
              label="Save"
              disabled={!mood && text.trim().length === 0}
              onPress={async () => {
                const today = new Date();
                const date = today.toISOString().slice(0, 10);
                try {
                  await saveTodaysNote({
                    date,
                    mood,
                    noteType,
                    text: text.trim(),
                  });
                  Alert.alert("Sparat!", "Dagens anteckning är sparad.");
                  setText("");
                  setMood(null);
                  setNoteType("planning");
                } catch (e) {
                  Alert.alert("Fel", "Kunde inte spara anteckningen.");
                }
              }}
            />
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    padding: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
  },
  centerTitle: {
    textAlign: "center",
    marginBottom: spacing.lg,
  },
  moodsGridRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: spacing.md,
    gap: spacing.sm,
  },
  inputCard: {
    minHeight: 280,
    borderRadius: 18,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.stroke,
    padding: spacing.md,

    shadowColor: colors.shadow,
    shadowOpacity: 0.18,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
    // body font:
    fontFamily: "DMSans-Regular",
  },
  saveRow: {
    alignItems: "center",
  },
  saveHint: {
    color: colors.mutedText,
    fontSize: 12,
  },
});
