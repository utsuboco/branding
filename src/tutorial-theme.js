import { styled } from "@stitches/react";

export const TutorialContainer = styled("div", {
  fontFamily: "Switzer, Helvetica, sans-serif",
  pointerEvents: "none",
  position: "fixed",
  left: "30px",
  top: "60px",
  "&.dark a": {
    color: "#2d2d2d",
  },
  "&.light a": {
    color: "#fff",
  },
});

export const TutorialTitleStyle = styled("h2", {
  fontSize: "26px",
  fontWeight: "bold",
  padding: "0",
  margin: "0",
});