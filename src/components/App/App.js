import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import ArticleList from '../ArticleList/ArticleList';
import ArticleDetailed from '../ArticleDetailed/ArticleDetailed';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Switch, Route} from 'react-router-dom';
import { fetchTopStories } from '../../apiCalls';

const App = () => {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState('')
  const [subject, setSubject] = useState('home')

  useEffect(() => {
    fetchTopStories(subject)
    .then(data => setArticles(data.results))
    .catch(err => setError(err))
  }, [subject])

  const changeSubject = (subjectSelected) => {
    setSubject(subjectSelected)
  }

  return (
    <>
      {articles &&
        <div className="App">
          <NavBar changeSubject={changeSubject}/>
          <Switch>
            <Route exact path="/">
              <ArticleList articles={articles}/>
            </Route>
            <Route
              exact path="/article/:index"
              render={({match}) => {
                const i = parseInt(match.params.index)
                return <ArticleDetailed article={articles[i]} />
              }}
            >
            </Route>
            <Route path="*">
              <PageNotFound/>
            </Route>
          </Switch>
        </div>
      }
    </>
  );
}

export default App;
