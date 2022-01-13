import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MyNavPanel from './Components/MyNavPanel.jsx';
import Home from './Components/Home';
import Ranking from './pages/Ranking';
import AboutItem from './pages/AboutItem';
import Contacts from './pages/Contacts';


function App() {
  const pages = {
    p1: "КАТАЛОГ",
    p2: "РЕЙТИНГ ПРОДУКТОВ",
    p3: "КОНТАКТЫ"
  }
  return (
    <Router>
      <div className="App">
        <MyNavPanel pages={pages} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pages/Contacts' component={Contacts} />
          <Route exact path='/pages/Ranking' component={Ranking} />
          <Route exact path='/pages/AboutItem' component={AboutItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
