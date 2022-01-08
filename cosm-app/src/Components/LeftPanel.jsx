import React from 'react';
import RateItem from './RateItem.jsx';
import './LeftPanel.css';

export default function LeftPanel() {
  return(
    <section className="leftcol">
            <ul className="ratecol">
                <li className="litemtop">Рейтинг косметики</li>
                <RateItem item="Медузка" />
                <RateItem item="Лотос и бамбук" />
                <RateItem item="Крем увлажняющий" />
                <RateItem item="CC-крем" />
            </ul>
            <ol className="ratecol">
                <li className="litemtop">Новости</li>
                <li className="litem">1.</li>
            </ol>
    </section>
  )
}
