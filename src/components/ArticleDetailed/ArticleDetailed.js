import { Link } from 'react-router-dom';
import './ArticleDetailed.css';

const ArticleDetailed = ({ article }) => {

  return(
    <>
      {article &&
        <article
          className="article-container"
          style={{backgroundImage: `url(${article.multimedia[0].url})`}}
        >
          <section className="article-content">
            <p className="title">{article.title}</p>
            <p className="abstract">{article.abstract}</p>
            <p className="author">{article.byline}</p>
            <a href={article.url}>Read Article</a>
          </section>
        </article>
      }
    </>
  )
}

export default ArticleDetailed;
