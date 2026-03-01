export type MoodId =
  | "pink"
  | "lime"
  | "lavender"
  | "peach"
  | "purple"
  | "blue"
  | "yellow";

export const MOODS: { id: MoodId; label: string; image: any }[] = [
  { id: "pink", label: "Pink", image: require("../../assets/moods/light-pink.png") },
  { id: "lime", label: "Lime", image: require("../../assets/moods/lime.png") },
  { id: "lavender", label: "Lavender", image: require("../../assets/moods/lavender.png") },
  { id: "peach", label: "Peach", image: require("../../assets/moods/peach.png") },
  { id: "purple", label: "Purple", image: require("../../assets/moods/purple.png") },
  { id: "blue", label: "Blue", image: require("../../assets/moods/light-blue.png") },
  { id: "yellow", label: "Yellow", image: require("../../assets/moods/yellow.png") },
];
