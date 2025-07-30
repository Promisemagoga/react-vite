import { MainContainer } from "../MainContainer";
import { PageContainer } from "../PageContainer";
import { HeroSection } from "../components/HeroSection/HeroSection";

export const Contact = () => {
  return (
    <MainContainer>
      <PageContainer>
        <div style={{ marginTop: "100px" }}>
          <HeroSection
            img="/src/assets/smartphone.png"
            imageStyle={{ borderRadius: 0 }}
            subtitle="Give us a call"
            description="012 345 6789"
          />
        </div>
      </PageContainer>
    </MainContainer>
  );
};
