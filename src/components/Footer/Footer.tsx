import React from "react";
import { MainContainer } from "../../MainContainer";
import styles from "./Footer.module.css";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  return (
    <footer className={styles["footer-cont"]}>
      <MainContainer>
        <Logo name="Coffee Hub" icon="./src/assets/coffee-cup.png"></Logo>
      </MainContainer>
    </footer>
  );
};
