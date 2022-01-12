import React from 'react';
import RateItem from './RateItem.jsx';
import './LeftPanel.css';

const nameItems = ["Медузка", "Лотос и бамбук", "Крем увлажняющий", "CC-крем"];

export default function LeftPanel() {

  return(
    <section className="leftcol">
      <ul className="ratecol">
        <li className="litemtop">Рейтинг косметики</li>
        {nameItems.map((item) => <RateItem key={item} item={item} />)}
      </ul>
      <ol className="ratecol">
        <li className="litemtop">Новости</li>
        <li className="litem">1.</li>
      </ol>
    </section>
  )
}
