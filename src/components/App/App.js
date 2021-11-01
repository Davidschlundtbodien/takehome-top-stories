import './App.css';
import { Switch, Route} from 'react-router-dom';

function App() {
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
