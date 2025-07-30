import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { useSearchParams } from "react-router";

type Props = {
  id: number;
  img: string;
  name: string;
  price: number;
};

export const Products = () => {
  const [searchParams] = useSearchParams();
  const [Products, setProducts] = useState<Props[]>([
    {
      id: 1,
      img: "/assets/Black-coffe.jpg",
      name: "Black Coffe",
      price: 15,
    },
    {
      id: 2,
      img: "/assets/americano.jpg",
      name: "Americano",
      price: 18,
    },
    {
      id: 3,
      img: "/assets/cuppacino.jpg",
      name: "Cappuccino",
      price: 22,
    },
    {
      id: 4,
      img: "/assets/flat-white.jpg",
      name: "Flat White",
      price: 24,
    },
    {
      id: 5,
      img: "/assets/hot-chocolate.jpg",
      name: "Hot Chocolate",
      price: 25,
    },
    {
      id: 3,
      img: "/assets/latte.jpg",
      name: "Latte",
      price: 24,
    },
  ]);

  const [filtered, setFiltered] = useState<Props[]>(Products);

  useEffect(() => {
    const query = searchParams.get("query")?.toLowerCase() || "";

    if (query) {
      const result = Products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.id.toString() === query ||
          product.price.toString() === query
      );
      setFiltered(result);
    } else {
      setFiltered(Products);
    }
  }, [searchParams]);

  return (
    <div className={styles["coffee-grid"]}>
      {filtered.length > 0 ? (
        filtered.map((data, index) => (
          <div key={index} className={styles.card}>
            <img src={data.img} />
            <h2>{data.name}</h2>
            <h3>R{data.price}</h3>
          </div>
        ))
      ) : (
        <p>No matching products found</p>
      )}
    </div>
  );
};
