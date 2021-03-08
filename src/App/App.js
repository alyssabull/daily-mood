import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
