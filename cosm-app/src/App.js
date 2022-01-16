import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MyNavPanel from './Components/MyNavPanel.jsx';
import AppRouter from './Components/AppRouter';
import { CurItem } from './context';

function App() {
  const pages = {
    p1: "КАТАЛОГ",
    p2: "РЕЙТИНГ ПРОДУКТОВ",
    p3: "КОНТАКТЫ"
  }
  const [curID, setCurID] = useState(1);
  return (
    <CurItem.Provider value={{
      curID,
      setCurID
    }}>
      <Router>
        <div className="App">
          <MyNavPanel pages={pages} />
          <AppRouter />
        </div>
      </Router>
    </CurItem.Provider>
  );
}

export default App;
