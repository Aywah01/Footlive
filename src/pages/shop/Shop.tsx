import React from "react";
import styles from "./shop.module.css";

const Shop: React.FC = () => {
  return (
    <div className={styles.shopContainer}>
      <h1 className={styles.shopTitle}>Shop</h1>
      <p className={styles.shopParagraph}>
        Welcome to the Shop page. Here you can purchase football jerseys and
        other merchandise.
      </p>
    </div>
  );
};

export default Shop;
