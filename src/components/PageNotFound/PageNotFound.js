import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = ({ article }) => {

  return(
    <article className="article-list-container">
      <h1>404 Page Not Found</h1>
      <Link to={'/'}>Return to Index</Link>
    </article>
  )
}

export default PageNotFound;
