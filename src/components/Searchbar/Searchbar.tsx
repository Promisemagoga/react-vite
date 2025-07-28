import { useEffect, useState } from "react";
import styles from "./Searchbar.module.css";
import { useSearchParams } from "react-router";

export const Searchbar = () => {
  const [text, setText] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const initialQuery = searchParams.get("query") || "";
    setText(initialQuery);
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", text);
    setSearchParams({ query: text });
  };

  return (
    <div className={styles["search-wrapper"]}>
      <div className={styles["search-container"]}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.Searchbar}
          value={text}
          onChange={(e) => setText(e.target.value)}
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
