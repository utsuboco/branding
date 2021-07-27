import { styled } from "@stitches/react";

export const SnsContainer = styled("div", {
  fontFamily: "Switzer, Helvetica, sans-serif",
  position: "fixed",
  pointerEvents: "none",
  bottom: "15px",
  left: "18px",
  "& a": {
    pointerEvents: "all",
  },
});

export const SocialLinkStyle = styled("a", {
  display: "inline-block",
  fontSize: "12px",
  padding: "15px 12px",
  fontWeight: "bold",
  textTransform: "uppercase",
  textDecoration: "none",
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
