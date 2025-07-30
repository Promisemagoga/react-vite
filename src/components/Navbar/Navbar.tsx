import styles from "./Navbar.module.css";
import { Logo } from "../Logo/Logo";
import { PageContainer } from "../../PageContainer";
import { NavLink } from "react-router";
export const Navbar = () => {
  return (
    <nav>
      <PageContainer>
        <div className={styles.content}>
          <Logo name="Coffee Hub" icon="./assets/coffee-cup.png" />
          <div className={styles.navContent}>
            <NavLink to={"/"} className={styles.link}>
              Home
            </NavLink>
            <NavLink to={"/About"} className={styles.link}>
              About
            </NavLink>
            <NavLink to={"/Contact"} className={styles.link}>
              Contact
            </NavLink>
            {/* <NavLink to={"*"} className={styles.link}>
              Product
            </NavLink> */}
            {/* <div className={styles["profile-icon"]}>
              <Text variant="span">U</Text>
            </div> */}
          </div>
        </div>
      </PageContainer>
    </nav>
  );
};
