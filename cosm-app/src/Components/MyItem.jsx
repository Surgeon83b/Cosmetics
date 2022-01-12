import React from 'react';
import Description from './Description';
import './MyItem.css';

export default function MyItem({caption, imgname, refi, isDef, info}) {
  return (
    <div className="Rank">
      <div className='new'>
        <a href={refi}><img src={imgname} alt={imgname}></img></a>
        <p className="caption">{caption}</p>     
      </div>
      {isDef && <Description text={info}/>}
    </div>
  )
}
