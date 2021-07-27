import React from 'react'
import LogoWhite from '../../../static/img/logo-w.svg'
import LogoBlack from '../../../static/img/logo-b.svg'
import { CONFIG_BRANDING } from '../../config';
import { FooterBaseline, FooterContainer, FooterLink, FooterLogo } from './footer.styles';

export function Footer({
  theme = CONFIG_BRANDING.THEME_DARK,
  position = CONFIG_BRANDING.BOTTOM_RIGHT,
}) {
  return (
    <FooterContainer className={theme}>
      <FooterLink href="https://utsubo.co/" target="_blank">
        <FooterLogo className="flogo">
          <span>Made by</span>
          <img
            src={theme === CONFIG_BRANDING.THEME_LIGHT ? LogoWhite : LogoBlack}
            alt="Utsubo"
          />
        </FooterLogo>
        <FooterBaseline className="fbsl">
          Technology-focused creative studio<span className='sptbr'></span><span className='fbsljp'>WEB制作会社</span>
        </FooterBaseline>
      </FooterLink>
    </FooterContainer>
  );
}
