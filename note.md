#reset css with styled components

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

- {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
  `

// in your app root - "added at index.js" works
<React.Fragment>
<GlobalStyle />
<Navigation /> {/_ example of other top-level stuff _/}
</React.Fragment>

#To create a variable with global scope, declare it inside the :root selector. The :root selector matches the document's root element.
The :root selector matches the document's root element.
In HTML, the root element is always the html element.
