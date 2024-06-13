import React from "react";
import styles from "./articles.module.css";

const Articles: React.FC = () => {
  return (
    <div className={styles.articlesContainer}>
      <h1 className={styles.articlesTitle}>Articles</h1>
      <p className={styles.articlesParagraph}>
        Welcome to the Articles page. Here you will find interesting articles
        about football.
      </p>
    </div>
  );
};

export default Articles;
