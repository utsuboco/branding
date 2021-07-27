import React from 'react'
import LogoWhite from '../../static/img/logo-w.svg'
import LogoBlack from '../../static/img/logo-b.svg'
import { CONFIG_BRANDING } from '../config';

export function Footer({
  theme = CONFIG_BRANDING.THEME_DARK,
  position = CONFIG_BRANDING.BOTTOM_RIGHT,
}) {
  return (
    <a href="https://utsubo.co/" target="_blank">
      <p>
        <span>Made by</span>
        <img
          src={theme === CONFIG_BRANDING.THEME_LIGHT ? LogoWhite : LogoBlack}
        />
      </p>
      <p>Technology-focused creative studio<span>|</span>WEB制作会社</p>
    </a>
  );
}
