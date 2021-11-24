import React, { useState, useEffect } from 'react';
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import LandingPage from '../LandingPage/LandingPage';
import ColorBook from '../ColorBook/ColorBook';
import Footer from '../../Components/Footer/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [emoji, setEmoji] = useState(false);

  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            emoji={emoji}
            setEmoji={setEmoji}
          />
        </Route>
        <Route exact path="/color">
          <ColorBook
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            emoji={emoji}
            setEmoji={setEmoji}
          />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
