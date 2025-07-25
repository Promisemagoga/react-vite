import { useRef, useState } from "react";
import styles from "./Searchbar.module.css";

export type SearchbarProps = {
  ref: React.RefObject<HTMLInputElement | null>;
  // onSearch: React.MouseEventHandler<HTMLImageElement>;
};

export const Searchbar = ({ ref }: SearchbarProps) => {
  const [text, setText] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  function handleSearch() {
    console.log(searchRef.current?.value);
  }

  return (
    <div className={styles["search-wrapper"]}>
      <div className={styles["search-container"]}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.Searchbar}
          // onChange={(event) => setText(event?.target.value)}
          ref={searchRef}
        />
        <img
          src="./src/assets/search.png"
          className={styles["search-icon"]}
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};
