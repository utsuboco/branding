import { createCss } from "@stitches/react";

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  }
});