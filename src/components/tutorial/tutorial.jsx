import React from "react";
import { CONFIG_BRANDING } from "../../config";
import { TutorialContainer, TutorialTitleStyle, TutorialDescriptionStyle } from "./tutorial.styles";

export function TutorialTitle({
  theme = CONFIG_BRANDING.THEME_DARK,
  description = null,
  number = '00'
}) {
  return (
    <TutorialContainer className={theme}>
      <TutorialTitleStyle>TUTORIAL #{number}</TutorialTitleStyle>
      {description && <TutorialDescriptionStyle>{description}</TutorialDescriptionStyle>}
      {CONFIG_BRANDING.ALL_TUTORIAL.length > 0 && (
        <a href={CONFIG_BRANDING.ALL_TUTORIAL} target="_blank">
          SEE ALL
        </a>
      )}
    </TutorialContainer>
  );
}
