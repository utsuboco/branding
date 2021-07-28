import { styled } from "../../../stitches.config";

export const TutorialContainer = styled("div", {
  fontFamily: "Switzer, Helvetica, sans-serif",
  pointerEvents: "none",
  position: "fixed",
  left: "20px",
  top: "20px",
  "&.dark a": {
    color: "#2d2d2d",
  },
  "&.light a": {
    color: "#fff",
  },
  "@md": {
    left: "30px",
    top: "60px",
  },
});

export const TutorialTitleStyle = styled("h2", {
  userSelect: "none",
  fontSize: "22px",
  fontWeight: "bold",
  padding: "0",
  margin: "0",
  "@md": {
    fontSize: "26px",
  },
});
