import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Text } from "./components/Text/Text";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div id="app-container">
      <div id="scrollable">
        <Navbar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
