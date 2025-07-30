import { HeroSection } from "../components/HeroSection/HeroSection";
import { MainContainer } from "../MainContainer";
import { PageContainer } from "../PageContainer";

export const About = () => {
  return (
    <MainContainer>
      <PageContainer>
        <div style={{ marginTop: "100px" }}>
          <HeroSection
            img="/src/assets/waiter.png"
            imageStyle={{ borderRadius: 0 }}
            subtitle="About coffe hub"
            description="At Coffee Hub, we believe that a great cup of coffee can bring people together. Nestled in the heart of the community, our coffee shop is more than just a place to grab your daily brew — it's a cozy space where conversations spark, ideas are born, and moments are shared. We’re passionate about serving high-quality, ethically sourced coffee, handcrafted with care by our skilled baristas. Whether you’re here for a quick espresso, a relaxing latte, or a sweet treat to go with your day, Coffee Hub is your go-to destination for comfort, connection, and caffeine."
          />
        </div>
      </PageContainer>
    </MainContainer>
  );
};
