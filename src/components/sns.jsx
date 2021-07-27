import React from "react";
import { CONFIG_BRANDING } from "../config";

export function SocialLink({label, url}) {
  return (
    <a href={url} target='_blank'>{label}</a>
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
      <div>
        {twitter.length > 0 && <SocialLink label="twitter" url={twitter} />}
        {github.length > 0 && <SocialLink label="github" url={github} />}
        {youtube.length > 0 && <SocialLink label="youtube" url={youtube} />}
        {medium.length > 0 && <SocialLink label="medium" url={medium} />}
      </div>
    </>
  );
}
