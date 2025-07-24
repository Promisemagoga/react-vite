import React from "react";
import styles from "./Navbar.module.css";
import { Text } from "../Text/Text";
import { MainContainer } from "../../MainContainer";
import { Logo } from "../Logo/Logo";
export const Navbar = () => {
  return (
    <nav>
      <MainContainer className={styles.content}>
        <Logo name="Coffee Hub" icon="./src/assets/coffee-cup.png"></Logo>
        <div className={styles.navContent}>
          <a href="/#" className={styles.link}>
            Home
          </a>
          <a href="/#" className={styles.link}>
            About
          </a>
          <a href="/#" className={styles.link}>
            Contact
          </a>
          <div className={styles["profile-icon"]}>
            <Text variant="span">U</Text>
          </div>
        </div>
      </MainContainer>
    </nav>
  );
};
