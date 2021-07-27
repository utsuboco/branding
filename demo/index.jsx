import React from 'react'
import ReactDOM from 'react-dom'
import { CONFIG_BRANDING, Footer, HeaderUtsubo, SocialBar, TutorialTitle } from '../src/main'

ReactDOM.render(
  <React.StrictMode>
    {/* this needs to be wrapped by next Head */}
    <HeaderUtsubo />
    <TutorialTitle number={"01"} theme={CONFIG_BRANDING.THEME_DARK} />
    <SocialBar theme={CONFIG_BRANDING.THEME_DARK} />
    <Footer theme={CONFIG_BRANDING.THEME_DARK} />
  </React.StrictMode>,
  document.getElementById("root")
);