import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
  weights: ["500", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

export const FONT = fontFamily;

export const COLORS = {
  bgDeep: "#050610",
  bgMid: "#070b1c",
  bgTop: "#0e1836",
  card: "#0b0f20",
  accent: "#2d7ff9",
  accentSoft: "#4f94fb",
  accentLight: "#7db3ff",
  ink: "#f8fafc",
  inkSub: "#b5c2d7",
  inkDim: "#5f6f92",
  red: "#e5484d",
  green: "#34d399",
  amber: "#f5a623",
};

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
