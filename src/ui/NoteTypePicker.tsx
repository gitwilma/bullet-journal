import { Pressable, StyleSheet, Text, View } from "react-native";
import * as Haptics from "expo-haptics";
import { colors } from "@/theme/colors";

export type NoteType = "ordinary" | "planning" | "rant" | "feel";

const TYPES: { key: NoteType; label: string }[] = [
  { key: "ordinary", label: "ORDINARY" },
  { key: "planning", label: "PLANNING" },
  { key: "rant", label: "RANT" },
  { key: "feel", label: "FEEL" },
];

export function NoteTypePicker({
  value,
  onChange,
}: {
  value: NoteType;
  onChange: (t: NoteType) => void;
}) {
  return (
    <View style={styles.row}>
      {TYPES.map((t) => {
        const active = value === t.key;
        return (
          <Pressable
            key={t.key}
            onPress={() => {
              Haptics.selectionAsync();
              onChange(t.key);
            }}
            style={({ pressed }) => [
              styles.item,
              active && styles.itemActive,
              pressed && { opacity: 0.8 },
            ]}
          >
            <Text style={[styles.text, active && styles.textActive]}>
              {t.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 18,
    alignItems: "center",
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  itemActive: {
    backgroundColor: colors.chipBg,
  },
  text: {
    fontSize: 12,
    letterSpacing: 0.5,
    color: colors.text,
  },
  textActive: {
    color: colors.text,
  },
});
