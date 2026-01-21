import { Pressable, StyleSheet, Text } from "react-native";
import * as Haptics from "expo-haptics";
import { colors } from "@/theme/colors";

export function PrimaryButton({
  label,
  onPress,
  disabled,
}: {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}) {
  return (
    <Pressable
      onPress={() => {
        if (disabled) return;
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress();
      }}
      style={({ pressed }) => [
        styles.btn,
        disabled && styles.disabled,
        pressed && !disabled && { transform: [{ scale: 0.98 }] },
      ]}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 52,
    borderRadius: 999,
    backgroundColor: colors.text,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    letterSpacing: 0.3,
    fontFamily: "SpaceGrotesk-SemiBold",
  },
  disabled: {
    opacity: 0.4,
  },
});
