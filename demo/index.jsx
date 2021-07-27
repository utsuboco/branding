import React from 'react'
import ReactDOM from 'react-dom'
import { Footer, Logo, SocialBar, TutorialTitle } from '../src/main'

ReactDOM.render(
  <React.StrictMode>
    <TutorialTitle number={'01'} />
    <SocialBar />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)