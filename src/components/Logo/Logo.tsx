import { Text } from "../Text/Text";
import styles from "./Logo.module.css";

type Props = {
  name: string;
  icon: string;
};

export const Logo = ({ name, icon }: Props) => {
  return (
    <div className={styles["logo-container"]}>
      <img src={icon} className={styles["logo-icon"]} />
      <Text
        variant="h2"
        style={{ margin: 0, color: "#fff", fontFamily: "cursive" }}
      >
        {name}
      </Text>
    </div>
  );
};
