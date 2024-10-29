import React from "react";
import styles from "./shop.module.css";

// Import images
import mensJersey from "./interhomejersey.jpg";
import womensJersey from "./interthirdkitwomenjersey.jpg";
import kidsJersey from "./interhomekidsjersey.jpg";
import saleJersey from "./sale.jpg";

const Shop: React.FC = () => {
  const items = [
    {
      id: 1,
      category: "Men",
      name: "Men's Jersey",
      image: mensJersey, // Use imported image
      price: "$$",
      description: "Official men's football jersey.",
    },
    {
      id: 2,
      category: "Women",
      name: "Women's Jersey",
      image: womensJersey, // Use imported image
      price: "$$",
      description: "Official women's football jersey.",
    },
    {
      id: 3,
      category: "Kids",
      name: "Kids' Jersey",
      image: kidsJersey, // Use imported image
      price: "$$",
      description: "Official kids' football jersey.",
    },
    {
      id: 4,
      category: "Sale",
      name: "Discounted Jersey",
      image: saleJersey, // Use imported image
      price: "$$",
      description: "Sale on official jersey.",
    },
  ];

  return (
    <div className={styles.shopContainer}>
      <h1 className={styles.shopTitle}>Shop</h1>
      <p className={styles.shopParagraph}>
        Welcome to the Shop page. Here you can purchase football jerseys and
        other merchandise.
      </p>
      <div className={styles.gridContainer}>
        {items.map((item) => (
          <div key={item.id} className={styles.gridItem}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.itemImage}
            />
            <h2 className={styles.itemName}>{item.name}</h2>
            <p className={styles.itemDescription}>{item.description}</p>
            <hr className={styles.separator} />
            <span className={styles.itemPrice}>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
