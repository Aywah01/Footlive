import React from "react";
import styles from "./news.module.css";

const News: React.FC = () => {
  const articles = [
    {
      title: "Football Championship Highlights",
      content:
        "Check out the highlights from last night's thrilling championship match.",
      date: "October 27, 2024",
    },
    {
      title: "Player Transfer News",
      content: "The latest updates on player transfers and team changes.",
      date: "October 28, 2024",
    },
    {
      title: "Injury Updates",
      content:
        "Stay informed with the latest injury reports as the season progresses.",
      date: "October 29, 2024",
    },
    {
      title: "Upcoming Matches",
      content: "Get ready for the exciting matches scheduled for this weekend.",
      date: "October 29, 2024",
    },
    // Add more articles as needed
  ];

  return (
    <div className={styles.newsContainer}>
      <h1 className={styles.newsTitle}>News</h1>
      <p className={styles.newsParagraph}>
        Welcome to the News page. Here you will find the latest football news
        and updates.
      </p>
      <div className={styles.gridContainer}>
        {articles.map((article, index) => (
          <div key={index} className={styles.gridItem}>
            <h2 className={styles.articleTitle}>{article.title}</h2>
            <p className={styles.articleContent}>{article.content}</p>
            <span className={styles.articleDate}>{article.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
