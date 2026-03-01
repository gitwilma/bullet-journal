import { colors } from "@/theme/colors";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#9aa0a6",
        tabBarStyle: { backgroundColor: colors.bg },
        tabBarLabelStyle: { fontFamily: "SpaceGrotesk-Medium", marginTop: -12 },
        tabBarItemStyle: { justifyContent: "flex-start" },
      }}
    >
      <Tabs.Screen
        name="todays-note"
        options={{
          title: "Today",
          tabBarLabel: "Todays note",
          tabBarIcon: () => null,
          headerStyle: {
            backgroundColor: colors.bg,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: () => null,
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarLabel: "History",
          tabBarIcon: () => null,
          headerStyle: {
            backgroundColor: colors.bg,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: () => null,
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: () => null,
          headerStyle: {
            backgroundColor: colors.bg,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: () => null,
        }}
      />

      <Tabs.Screen
        name="your-goals"
        options={{
          title: "Goals",
          tabBarLabel: "Goals",
          tabBarIcon: () => null,
          headerStyle: {
            backgroundColor: colors.bg,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: () => null,
        }}
      />

      <Tabs.Screen
        name="your-dreams"
        options={{
          title: "Dreams",
          tabBarLabel: "Dreams",
          tabBarIcon: () => null,
          headerStyle: {
            backgroundColor: colors.bg,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: () => null,
        }}
      />
    </Tabs>
  );
}
