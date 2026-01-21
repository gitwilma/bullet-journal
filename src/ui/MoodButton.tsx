import { Image, Pressable, StyleSheet, View } from "react-native";
import * as Haptics from "expo-haptics";
import { colors } from "@/theme/colors";

type Props = {
  image: any;
  selected?: boolean;
  onPress?: () => void;
  accessibilityLabel?: string;
};

export function MoodButton({ image, selected, onPress, accessibilityLabel }: Props) {
  return (
    <Pressable
      onPress={() => {
        Haptics.selectionAsync();
        onPress?.();
      }}
      style={({ pressed }) => [
        styles.pressable,
        pressed && { transform: [{ scale: 0.97 }] },
      ]}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      <View style={[styles.container, selected && styles.selected]}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
    </Pressable>
  );
}

const SIZE = 74;

const styles = StyleSheet.create({
  pressable: {
    borderRadius: SIZE / 2,
  },
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    shadowColor: colors.shadow,
    shadowOpacity: 0.22,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  selected: {
    // om du vill markera vald:
    // borderWidth: 2,
    // borderColor: colors.text,
  },
});
