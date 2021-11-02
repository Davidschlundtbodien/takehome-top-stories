import React, {useEffect, useState} from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import { fetchTopStories } from '../../apiCalls';

const App = () => {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchTopStories()
    .then(data => setArticles(data.results))
    .catch(err => setError(err))
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          // Index
        </Route>
        <Route exact path="/article">
          // Detailed
        </Route>
        <Route path="*">
          // 404 page
        </Route>
      </Switch>
    </div>
  );
}

export default App;
