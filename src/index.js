

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

/*
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { DarkMode } from './components/darkMode';
import { light, dark } from './components/themes';
import { GlobalStyles } from './components/global';

import Toggle from './components/toggle';

function App() {
  const [theme, toggleTheme, componentMounted] = DarkMode();
  const themeMode = theme === 'light' ? light : dark;

  if (!componentMounted) {
    return <div /> 
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1> switch {theme === 'light' ? 'dark theme' : 'light theme'}</h1>
      </>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById('root'));
*/