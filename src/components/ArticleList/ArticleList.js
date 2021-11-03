import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import './ArticleList.css';

const ArticleList = ({ articles }) => {
  const [filteredArticles, setFilter] = useState([])

  useEffect(() => {
    setFilter(articles)
  }, [articles])

  const handleSearch = (searchInput) => {
    setFilter(articles.filter(article => article.title.toLowerCase().includes(searchInput.toLowerCase())))
  }

  const articleList = filteredArticles.map((article, index) => {
    return (
      <Link to={`/article/${index}`} key={index} className="article-list-item">
        <img src={article.multimedia[2].url} alt="article thumbnail"/>
        <div className="article-item-text">
          <p className="article-title">{article.title}</p>
          <p className="article-author">{article.byline}</p>
        </div>
      </Link>
    )
  })

  return(
    <article className="article-list-container">
      <Search handleSearch={handleSearch}/>
      <div className="article-gallery">
        {articleList}
      </div>
    </article>
  )
}

export default ArticleList;
