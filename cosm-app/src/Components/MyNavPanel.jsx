import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MyNavPanel.css';

export default function MyNavPanel({ pages }) {
  return (
    <nav>
      <ul className="navitems">
        <li className="item"> <Link to='/' target="_blank">{pages.p1}</Link> </li>
        <li className="item"> <Link to='../pages/Ranking' target="_blank">{pages.p2}</Link> </li>
        <li className="item"> <Link to='../pages/Contacts' target="_blank">{pages.p3}</Link></li>
        <li className="itemmark"> <input size="20" placeholder="Поиск"></input> </li>
      </ul>
    </nav>
  )
}
