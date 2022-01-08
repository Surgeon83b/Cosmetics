import React from 'react';
import './MyNavPanel.css';

export default function MyNavPanel() {
    return (
        <>
          <nav>
           <ul className="navitems">
            <li className="item"> <a href="https://www.marykay.by/cosmetics/"> Каталог </a> </li>
            <li className="item"> <a href="https://readrate.com/rus/ratings/top100"> Рейтинг средств </a> </li>
            <li className="item"> <a href="https://web.facebook.com/konstantin.pyatkevich"> Контакты </a> </li>
            <li className="itemmark"> <input size="20" value="Поиск"></input> </li>
           </ul>
          </nav>  
        </>
    )
}
