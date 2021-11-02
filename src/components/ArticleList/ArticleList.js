import { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import './ArticleList.css';

const ArticleList = ({ articles }) => {
  const [filteredArticles, setFilter] = useState(articles)

  const handleSearch = (searchInput) => {
    setFilter(articles.filter(article => article.title.toLowerCase().includes(searchInput.toLowerCase())))
  }

  const articleList = filteredArticles.map((article, index) => {
    return (
      <Link to={`/article/${index}`} key={index} className="article-list-item">
        <p>{article.title}</p>
      </Link>
    )
  })

  return(
    <article className="article-list-container">
      <Search handleSearch={handleSearch}/>
      {articleList}
    </article>
  )
}

export default ArticleList;
