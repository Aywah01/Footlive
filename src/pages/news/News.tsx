// import React from "react";
// import styles from "./news.module.css";

// const News: React.FC = () => {
//   const articles = [
//     {
//       title: "Football Championship Highlights",
//       content:
//         "Check out the highlights from last night's thrilling championship match.",
//       date: "October 27, 2024",
//     },
//     {
//       title: "Player Transfer News",
//       content: "The latest updates on player transfers and team changes.",
//       date: "October 28, 2024",
//     },
//     {
//       title: "Injury Updates",
//       content:
//         "Stay informed with the latest injury reports as the season progresses.",
//       date: "October 29, 2024",
//     },
//     {
//       title: "Upcoming Matches",
//       content: "Get ready for the exciting matches scheduled for this weekend.",
//       date: "October 29, 2024",
//     },
//     // Add more articles as needed
//   ];

//   return (
//     <div className={styles.newsContainer}>
//       <h1 className={styles.newsTitle}>News</h1>
//       <p className={styles.newsParagraph}>
//         Welcome to the News page. Here you will find the latest football news
//         and updates.
//       </p>
//       <div className={styles.gridContainer}>
//         {articles.map((article, index) => (
//           <div key={index} className={styles.gridItem}>
//             <h2 className={styles.articleTitle}>{article.title}</h2>
//             <p className={styles.articleContent}>{article.content}</p>
//             <span className={styles.articleDate}>{article.date}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;

import React from "react";
import styles from "./news.module.css";

const News: React.FC = () => {
  const englishArticles = [
    {
      title: "Google Sports News",
      link: "https://news.google.com",
    },
    {
      title: "Sky Sports",
      link: "https://www.skysports.com",
    },
    {
      title: "ESPN",
      link: "https://www.espn.com",
    },
    {
      title: "BBC Sports",
      link: "https://www.bbc.com/sport",
    },
    {
      title: "CNN Sports",
      link: "https://www.cnn.com/sports",
    },
    {
      title: "Yahoo Sports",
      link: "https://sports.yahoo.com",
    },
  ];

  const koreanArticles = [
    {
      title: "The Herald Korea Sports",
      link: "http://www.heraldk.com",
    },
    {
      title: "JoongAng Korea Sports",
      link: "https://www.joongang.co.kr",
    },
    {
      title: "Naver Sports",
      link: "https://sports.naver.com",
    },
    {
      title: "Maeil Sports",
      link: "https://www.mk.co.kr/en/news/sports/",
    },
  ];

  return (
    <div className={styles.newsContainer}>
      <h1 className={styles.newsTitle}>News</h1>
      <p className={styles.newsParagraph}>Welcome to the News page.</p>

      <h2 className={styles.newsTitle}>English News</h2>
      <div className={styles.gridContainer}>
        {englishArticles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.gridItem}
          >
            <h2 className={styles.articleTitle}>{article.title}</h2>
          </a>
        ))}
      </div>

      <h2 className={styles.newsTitle}>Korean News</h2>
      <div className={styles.gridContainer}>
        {koreanArticles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.gridItem}
          >
            <h2 className={styles.articleTitle}>{article.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;
