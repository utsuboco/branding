import { styled } from "../../../stitches.config";

export const SnsContainer = styled("div", {
  fontFamily: "Switzer, Helvetica, sans-serif",
  position: "fixed",
  pointerEvents: "none",
  bottom: "5px",
  left: "10px",
  "& a": {
    pointerEvents: "all",
  },
  "@md": {
    bottom: "15px",
    left: "18px",
  },
});

export const SocialLinkStyle = styled("a", {
  userSelect: "none",
  display: "inline-block",
  fontSize: "12px",
  padding: "15px 10px",
  fontWeight: "bold",
  textTransform: "uppercase",
  textDecoration: "none",
  "@md": {
    padding: "15px 12px",
  },
  "&.dark": {
    color: "#2d2d2d",
    "&:hover": {
      backgroundColor: "#2d2d2d",
      color: "#fff",
    },
  },
  "&.light": {
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#2d2d2d",
    },
  },
});
