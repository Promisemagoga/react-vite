import { Logo } from "../Logo/Logo";
import styles from "./HeroSection.module.css";

type Props = {
  img: string;
  imageStyle?: React.CSSProperties;
  subtitle: string;
  description: string;
};
export const HeroSection = ({
  img,
  subtitle,
  description,
  imageStyle,
}: Props) => {
  return (
    <div className={styles["section-wrapper"]}>
      <div className={styles["hero-section"]}>
        <div className={styles["hero-image-side"]}>
          <img src={img} style={imageStyle} className={styles["hero-image"]} />
        </div>
        <div className={styles["section-content"]}>
          <Logo name="Coffee Hub" icon="/assets/coffee-cup.png"></Logo>
          <h3>{subtitle}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
