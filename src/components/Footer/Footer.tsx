import React from "react";
import { MainContainer } from "../../MainContainer";
import styles from "./Footer.module.css";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  return (
    <footer>
      <MainContainer className={styles.content}>
        <div className={styles["footer-cont"]}>
          <Logo name="Coffee Hub" icon="./src/assets/coffee-cup.png"></Logo>
        </div>
      </MainContainer>
    </footer>
  );
};
