import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './Cosm.css';
import MyNavPanel from './Components/MyNavPanel.jsx';
import Home from './Components/Home';
import Page3 from './pages/Page3';
import Ranking from './pages/Ranking';
import MainSec from './Components/MainSec';


function App() {
  const pages = { p1: "Каталог",
                  p2: "Рейтинг средств",
                  p3: "Контакты"
        }
  return (
    <Router>
      <div className="App">
          <MyNavPanel pages={pages} />
        <div className="container" >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/pages/Page3' component={Page3} />
            <Route exact path='/pages/Ranking' component={Ranking} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
/*
function App() {
  return (
    <>
      <div className="App">
        
      </div>
    </>
  );
}*/

export default App;
