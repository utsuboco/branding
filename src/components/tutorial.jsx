import React from "react";
import { CONFIG_BRANDING } from "../config";
import { TutorialContainer, TutorialTitleStyle } from "../tutorial-theme";

export function TutorialTitle({
  theme = CONFIG_BRANDING.THEME_DARK,
  position = CONFIG_BRANDING.TOP_RIGHT,
  number = '00'
}) {
  return (
    <TutorialContainer className={theme}>
      <TutorialTitleStyle>TUTORIAL #{number}</TutorialTitleStyle>
      {CONFIG_BRANDING.ALL_TUTORIAL.length > 0 && (
        <a href={CONFIG_BRANDING.ALL_TUTORIAL} target="_blank">
          SEE ALL
        </a>
      )}
    </TutorialContainer>
  );
}
