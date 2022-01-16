import React from 'react';
import { Link } from 'react-router-dom';
import Description from './Description';
import '../styles/MyItem.css';

export default function MyItem({ id, caption, imgname, isDef, info }) {
  let propss = { id, caption, imgname, isDef, info };
  let capt = String(caption);
  if (capt.length > 40) {
    capt = capt.slice(0, 40) + ' ...';
  }
  console.log('MyItem '+id);

  return (
    <div className="Rank">
      <div className='new'>
        <Link to={{pathname: '/pages/AboutItem', propsSearch: propss}}> <img src={imgname} alt={imgname}></img> </Link>
        <p className="caption">{capt}</p>
      </div>
      {isDef && <Description text={info} />}
    </div>
  )
}
