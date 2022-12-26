import React from "react";
import { createGlobalStyle } from "styled-components"
import Start from './Start';

const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <div>App</div>
      <Start />
    </>
  );
}

export default App;
