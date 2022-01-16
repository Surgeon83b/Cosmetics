import React from 'react';
import '../styles/RateItem.css';
import '../styles/LeftPanel.css';
import RateItem from './RateItem.jsx';

export default function MyList({ name, type, list }) {
  switch (type) {
    case "ol":
      return (
        <>
          <ol>
            <li className="litemtop">{name}</li>
            {list.map((item) => <RateItem key={item} item={item} />)}
          </ol>
        </>
      )
    case "ul":
      return (
        <ul>
          <li className="litemtop">{name}</li>
          {list.map((item) => <RateItem key={item} item={item} />)}
        </ul>
      )
    default:
      return (<></>)
  }
}
