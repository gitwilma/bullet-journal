import { View, Text } from "react-native";
import { textStyles } from "@/theme/textStyles";

export default function TodaysNoteScreen() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={textStyles.h1}>Todays note</Text>
      <Text style={textStyles.body}>
        This is where your daily reflection begins.
      </Text>
    </View>
  );
}
