import { Link } from 'react-router-dom';
import './ArticleList.css';

const ArticleList = ({ articles }) => {
  const articleList = articles.map((article, index) => {
    return (
      <Link to={`/article/${index}`} key={index} className="article-list-item">
        <p>{article.title}</p>
      </Link>
    )
  })

  return(
    <article className="article-list-container">
      {articleList}
    </article>
  )
}

export default ArticleList;
