import React from 'react';
import { createGlobalStyle } from 'styled-components'
import FormPage from './features/FormPage';

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
    
  }

  * {
    box-sizing: border-box
  }
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <FormPage />
    </React.Fragment>
  );
}

export default App;
