export type MoodId =
  | "pink"
  | "lime"
  | "lavender"
  | "orange"
  | "purple"
  | "blue"
  | "yellow";

export const MOODS: { id: MoodId; label: string; image: any }[] = [
  { id: "pink", label: "Pink", image: require("../../assets/moods/pink-button.png") },
  { id: "lime", label: "Lime", image: require("../../assets/moods/lime-button.png") },
  { id: "lavender", label: "Lavender", image: require("../../assets/moods/lavender-button.png") },
  { id: "orange", label: "Orange", image: require("../../assets/moods/orange-button.png") },
  { id: "purple", label: "Purple", image: require("../../assets/moods/purple-button.png") },
  { id: "blue", label: "Blue", image: require("../../assets/moods/baby-blue-button.png") },
  { id: "yellow", label: "Yellow", image: require("../../assets/moods/yellow-button.png") },
];
