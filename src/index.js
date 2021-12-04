import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { App } from './App'

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 :root {
/* Primary */
  --softRed: hsl(7, 99%, 70%);
  --yellow: hsl(51, 100%, 49%);
  --darkDesaturatedCyan: hsl(167, 40%, 24%);
  --darkBlue: hsl(198, 62%, 26%);
  --darkModerateCyan: hsl(168, 34%, 41%);

/* Neutral */
  --veryDarkDesaturatedBlue: hsl(212, 27%, 19%);
  --veryDarkGrayishBlue: hsl(213, 9%, 39%);
  --darkGrayishBlue: hsl(232, 10%, 55%);
  --grayishBlue: hsl(210, 4%, 67%);
  --white: hsl(0, 0%, 100%);
 }

 body {
   font-size: 18px;
 }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// font-family: 'Barlow', sans-serif;
// font-family: 'Fraunces', serif;
