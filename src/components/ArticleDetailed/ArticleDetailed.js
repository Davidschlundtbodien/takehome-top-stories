import { Link } from 'react-router-dom';
import './ArticleDetailed.css';

const ArticleDetailed = ({ article }) => {

  return(
    <article className="article-container">
      <h1>{article.title}</h1>
      <p>{article.abstract}</p>
      <img src={article.multimedia[0].url}/>
    </article>
  )
}

export default ArticleDetailed;
