import { styled } from "../../../stitches.config";

export const FooterContainer = styled("div", {
  fontFamily: "Switzer, Helvetica, sans-serif",
  position: "fixed",
  pointerEvents: "none",
  bottom: "20px",
  right: "20px",
  "&.dark a": {
    color: "#2d2d2d",
  },
  "&.light a": {
    color: "#fff",
  },
  "& a": {
    pointerEvents: "all",
    display: "block",
  },
  "@md": {
    bottom: "30px",
    right: "30px",
  },
});

export const FooterLink = styled("a", {
  "&:hover": {
    "& .flogo": {
      opacity: "0.85"
    },
    "& .fbsl": {
      opacity: "1",
    },
  },
});

export const FooterLogo = styled("p", {
  fontSize: "0",
  width: "118px",
  position: "relative",
  padding: "0",
  margin: "0",
  opacity: "1",
  transition: "opacity 0.3s ease",
  "& span": {
    position: "absolute",
    display: "block",
    width: "100%",
    padding: "0 0 2px",
    top: "0px",
    left: "0px",
    fontSize: "7px",
    fontWeight: "bold",
    transform: "translate(0, -100%)",
    textTransform: "uppercase",
  },
  "& img": {
    width: "100%",
  },
});

export const FooterBaseline = styled("p", {
  position: "absolute",
  whiteSpace: "nowrap",
  right: "0",
  bottom: "-20px",
  verticalAlign: "middle",
  fontSize: "12px",
  padding: "0",
  margin: "0",
  opacity: "0",
  transition: "opacity 0.3s ease",
  "& .sptbr": {
    position: "relative",
    display: "inline-block",
    padding: "0 8px",
    verticalAlign: "middle",
    "&::after": {
      content: " ",
      position: "absolute",
      display: "block",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "1px",
      height: "8px",
      background: "#2d2d2d",
    },
  },
  "& .fbsljp": {
    fontFamily: "Osaka-Mono, Osaka－等幅, Osaka, YuMincho, 游明朝体",
  },
});

