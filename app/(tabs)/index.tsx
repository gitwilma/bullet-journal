import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { textStyles } from "@/theme/textStyles";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const blackMood = require("../../assets/moods/black.png");

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        {/* Title */}
        <Text style={[textStyles.h3, styles.title]}>Good, you're here again</Text>
        <View style={styles.row}>
          <Text style={styles.prompt}>
            How are you{"\n"}feeling today?
          </Text>

          <Pressable
            onPress={() => router.push("/(tabs)/todays-note")}
            style={({ pressed }) => [
              styles.circlePressable,
              pressed && { transform: [{ scale: 0.98 }] },
            ]}
            accessibilityRole="button"
            accessibilityLabel="Go to today's note"
          >
            <Image source={blackMood} style={styles.circleImage} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const CIRCLE_SIZE = 120;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: 90,
  },
  title: {
    textAlign: "center",
    marginBottom: spacing.xl,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xl,
  },
  prompt: {
    fontFamily: "DMSans-Regular",
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
  },
  circlePressable: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
  },
  circleImage: {
    width: "100%",
    height: "100%",
    borderRadius: CIRCLE_SIZE / 2,
  },
});
