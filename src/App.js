import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components"
import Start from './components/Start';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import GmarketSansMedium from './styles/fonts/GmarketSansMedium.woff';

const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div>App</div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
