import React, { useState } from "react";
import styles from "./articles.module.css";

interface Article {
  id: number;
  title: string;
  content: string;
}

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedArticles = articles.map((article, index) => {
        if (index === editIndex) {
          return { ...article, title, content };
        }
        return article;
      });
      setArticles(updatedArticles);
      setEditIndex(null);
    } else {
      const newArticle = {
        id: Date.now(),
        title,
        content,
      };
      setArticles([...articles, newArticle]);
    }
    setTitle("");
    setContent("");
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setTitle(articles[index].title);
    setContent(articles[index].content);
  };

  const handleDelete = (index: number) => {
    const filteredArticles = articles.filter((_, i) => i !== index);
    setArticles(filteredArticles);
  };

  const handleMoveUp = (index: number) => {
    if (index > 0) {
      const newArticles = [...articles];
      const [movedArticle] = newArticles.splice(index, 1);
      newArticles.splice(index - 1, 0, movedArticle);
      setArticles(newArticles);
    }
  };

  const handleMoveDown = (index: number) => {
    if (index < articles.length - 1) {
      const newArticles = [...articles];
      const [movedArticle] = newArticles.splice(index, 1);
      newArticles.splice(index + 1, 0, movedArticle);
      setArticles(newArticles);
    }
  };

  return (
    <div className={styles.articlesContainer}>
      <h1 className={styles.articlesTitle}>Articles</h1>
      <p className={styles.articlesParagraph}>
        Welcome to the Articles page. Here you will find interesting articles
        about football.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Article Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Article Content"
          required
        />
        <button type="submit">
          {editIndex !== null ? "Update Article" : "Add Article"}
        </button>
      </form>

      <div>
        {articles.map((article, index) => (
          <div key={article.id} className={styles.articleItem}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleMoveUp(index)} disabled={index === 0}>
              Move Up
            </button>
            <button
              onClick={() => handleMoveDown(index)}
              disabled={index === articles.length - 1}
            >
              Move Down
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
