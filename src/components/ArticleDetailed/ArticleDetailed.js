import { Link } from 'react-router-dom';
import './ArticleDetailed.css';

const ArticleDetailed = ({ article }) => {

  return(
    <article className="article-list-container">
      <h1>{article.title}</h1>
      <p>{article.abstract}</p>
    </article>
  )
}

export default ArticleDetailed;
