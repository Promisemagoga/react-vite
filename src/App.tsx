import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { MainContainer } from "./MainContainer";
import { Routes } from "react-router";
import { Route } from "react-router";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";

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
