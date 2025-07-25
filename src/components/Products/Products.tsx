import { useState } from "react";
import styles from "./Products.module.css";

type Props = {
  id: number;
  img: string;
  name: string;
  price: number;
};

export const Products = () => {
  const [Products, setProducts] = useState<Props[]>([
    {
      id: 1,
      img: "./src/assets/Black-coffe.jpg",
      name: "Black Coffe",
      price: 15,
    },
    {
      id: 2,
      img: "./src/assets/americano.jpg",
      name: "Americano",
      price: 18,
    },
    {
      id: 3,
      img: "./src/assets/cuppacino.jpg",
      name: "Cappuccino",
      price: 22,
    },
    {
      id: 4,
      img: "./src/assets/flat-white.jpg",
      name: "Flat White",
      price: 24,
    },
    {
      id: 5,
      img: "./src/assets/hot-chocolate.jpg",
      name: "Hot Chocolate",
      price: 25,
    },
    {
      id: 3,
      img: "./src/assets/latte.jpg",
      name: "Latte",
      price: 24,
    },
  ]);

  return (
    <div className={styles["coffee-grid"]}>
      {Products.map((data) => (
        <div key={data.id} className={styles.card}>
          <img src={data.img} />
          <h2>{data.name}</h2>
          <h3>R{data.price}</h3>
        </div>
      ))}
    </div>
  );
};
