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
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { textStyles } from "@/theme/textStyles";
import { MOODS, MoodId } from "@/constants/moods";
import { MoodButton } from "@/ui/MoodButton";
import { NoteType, NoteTypePicker } from "@/ui/NoteTypePicker";
import { PrimaryButton } from "@/ui/PrimaryButton";

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
        {/* Today's feeling */}
        <Text style={[textStyles.h3, styles.centerTitle]}>Today&apos;s feeling</Text>

        <View style={styles.moodsGrid}>
          {MOODS.map((m) => (
            <MoodButton
              key={m.id}
              image={m.image}
              selected={mood === m.id}
              onPress={() => setMood(m.id)}
            />
          ))}
        </View>

        {/* Today's note */}
        <View style={{ height: spacing.xl }} />

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

        {/* Save (ingen backend än) */}
        <View style={{ height: spacing.lg }} />
        <View style={styles.saveRow}>
          <Text style={styles.saveHint}>
            <PrimaryButton
              label="Save"
              disabled={!mood && text.trim().length === 0}
              onPress={() => {
              Alert.alert("Saved (local)", "We’ll connect this to the database later.");
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
  moodsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: spacing.lg,
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
