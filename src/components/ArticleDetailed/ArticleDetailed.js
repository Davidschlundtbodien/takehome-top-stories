import { Link } from 'react-router-dom';
import './ArticleDetailed.css';

const ArticleDetailed = ({ article }) => {

  return(
    <article
      className="article-container"
      style={{backgroundImage: `url(${article.multimedia[0].url})`}}
    >
    <section className="article-content">
      <h1>{article.title}</h1>
      <p>{article.abstract}</p>
      <p>{article.byline}</p>
      <a href={article.url}>Read Article</a>
    </section>
    </article>
  )
}

export default ArticleDetailed;
