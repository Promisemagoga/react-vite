import { useState } from "react";
import styles from "./Searchbar.module.css";

export const Searchbar = () => {
  const [text, setText] = useState("");

  function handleClick() {
    console.log(text);
  }
  return (
    <div className={styles["search-wrapper"]}>
      <div className={styles["search-container"]}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.Searchbar}
          onChange={(event) => setText(event?.target.value)}
        />
        <img
          src="./src/assets/search.png"
          className={styles["search-icon"]}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
