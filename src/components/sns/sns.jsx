import React from "react";
import { CONFIG_BRANDING } from "../../config";
import { SnsContainer, SocialLinkStyle } from "./sns.styles";

export function SocialLink({ theme, label, url }) {
  return (
    <SocialLinkStyle className={theme} href={url} target="_blank">
      {label}
    </SocialLinkStyle>
  );
}

export function SocialBar({
  position = CONFIG_BRANDING.BOTTOM_LEFT,
  theme = CONFIG_BRANDING.THEME_DARK,
  twitter = "https://twitter.com/utsuboco",
  github = "https://github.com/utsuboco",
  youtube = "",
  medium = "",
  ...props
}) {
  return (
    <>
      <SnsContainer>
        {twitter.length > 0 && (
          <SocialLink theme={theme} label="twitter" url={twitter} />
        )}
        {github.length > 0 && (
          <SocialLink theme={theme} label="github" url={github} />
        )}
        {youtube.length > 0 && (
          <SocialLink theme={theme} label="youtube" url={youtube} />
        )}
        {medium.length > 0 && (
          <SocialLink theme={theme} label="medium" url={medium} />
        )}
      </SnsContainer>
    </>
  );
}
