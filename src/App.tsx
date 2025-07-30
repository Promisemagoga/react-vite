import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { MainContainer } from "./MainContainer";
import { Routes } from "react-router";
import { Route } from "react-router";
import { NotFound } from "./Pages/NotFound";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";

function App() {
  return (
    <MainContainer>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer />
    </MainContainer>
  );
}

export default App;
