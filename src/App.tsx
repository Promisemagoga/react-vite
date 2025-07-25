import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { MainContainer } from "./MainContainer";
import { PageContainer } from "./PageContainer";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { Products } from "./components/Products/Products";

function App() {
  return (
    <MainContainer>
      <Navbar />

      <div className="content">
        <PageContainer>
          <Searchbar />

          <HeroSection
            img="/src/assets/coffee-2406443_1280.jpg"
            subtitle="Where Great Ideas Begin with Great Coffee"
            description="At Coffee Hub, we’re more than just a place to grab a cup of coffee — we’re your daily escape. Whether you’re starting your morning, meeting with friends, or settling in with your laptop, our warm atmosphere and handcrafted brews make every visit feel just right. From rich espressos and creamy lattes to fresh pastries and cozy corners, we’re here to serve comfort in every cup."
          />
          <Products />
        </PageContainer>
      </div>

      <Footer />
    </MainContainer>
  );
}

export default App;
