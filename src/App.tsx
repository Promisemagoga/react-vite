import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { HeroSection } from "./components/HeroSection/HeroSection";

function App() {
  return (
    <div id="app-container">
      <div id="scrollable">
        <Navbar />
        <div className="section">
          <HeroSection
            img="/src/assets/coffee-2406443_1280.jpg"
            subtitle="Where Great Ideas Begin with Great Coffee"
            description="At Coffee Hub, we’re more than just a place to grab a cup of coffee — we’re your daily escape. Whether you’re starting your morning, meeting with friends, or settling in with your laptop, our warm atmosphere and handcrafted brews make every visit feel just right. From rich espressos and creamy lattes to fresh pastries and cozy corners, we’re here to serve comfort in every cup."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
