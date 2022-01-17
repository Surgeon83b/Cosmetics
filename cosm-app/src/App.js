import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRouter from './Components/AppRouter';
import MyNavPanel from './Components/MyNavPanel';
import { pages } from './utils/pages.js';

function App() {
  return (
    <div className="App">
      <Router path='/'>
        <MyNavPanel pages={pages} />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
