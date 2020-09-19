import React, { useState, useEffect, useCallback } from "react";
import styled, {ThemeProvider} from "styled-components";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Film from "./components/Film";
import People from "./components/People";
import Person from "./components/Person";
import "./style.css";
import { DarkMode } from './components/darkMode';
import { light, dark } from './components/themes';
import { GlobalStyles } from './components/global';
import Toggle from './components/toggle';


export default function App() {  
  const [theme, toggleTheme, componentMounted] = DarkMode();
  const themeMode = theme === 'light' ? light : dark;

  if (!componentMounted) {
    return <div /> 
  };

   return (
     <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
          <h1> switch {theme === 'light' ? 'dark theme' : 'light theme'}</h1>

        <Toggle theme={theme} toggleTheme={toggleTheme} />
      
      </>
  
    <Router>
      <Switch>
        <Route path="/" exact>
          <People />
        </Route>
        <Route path="/:personId">
          <Person />
          <Film />
           </Route>
        <Route path="/:filmId">
          <Person />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
  );
}
