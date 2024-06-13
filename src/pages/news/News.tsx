// import React from "react";
// import styles from "./news.module.css";

// const News: React.FC = () => {
//   return (
//     <div className={styles.newsContainer}>
//       <h1 className={styles.newsTitle}>News</h1>
//       <p className={styles.newsParagraph}>
//         Welcome to the News page. Here you will find the latest football news
//         and updates.
//       </p>
//     </div>
//   );
// };

// export default News;

import React, { useEffect, useState } from "react";

interface NewsItem {
  title: string;
  description: string;
  url: string;
}

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://openapi.naver.com/v1/search/news",
          {
            headers: {
              Authorization: `U8P7YcjxFWJE797Vj2MBcRQNWCRPJ0`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>News</h1>
      <p>
        Welcome to the News page. Here you will find the latest football news
        and updates.
      </p>
      <ul>
        {news.map((item, index) => (
          <li key={index}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
