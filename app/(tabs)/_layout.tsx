import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
   <Tabs
  screenOptions={{
    tabBarActiveTintColor: "#000000",
    tabBarInactiveTintColor: "#9aa0a6",
  }}
>

      <Tabs.Screen
        name="todays-note"
        options={{
          title: "Today",
          tabBarLabel: "Todays note",
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarLabel: "History",
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
        }}
      />

      <Tabs.Screen
        name="goals"
        options={{
          title: "Goals",
          tabBarLabel: "Goals",
        }}
      />

      <Tabs.Screen
        name="dreams"
        options={{
          title: "Dreams",
          tabBarLabel: "Dreams",
        }}
      />
    </Tabs>
  );
}
