import { MainContainer } from "../../MainContainer";
import styles from "./Footer.module.css";
import { Logo } from "../Logo/Logo";
import { PageContainer } from "../../PageContainer";

export const Footer = () => {
  return (
    <footer>
      <PageContainer>
        <div className={styles.content}>
          <div className={styles["footer-cont"]}>
            <Logo name="Coffee Hub" icon="./src/assets/coffee-cup.png"></Logo>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
};
