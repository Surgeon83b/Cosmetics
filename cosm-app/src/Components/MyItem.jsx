import React from 'react';
import './MyItem.css';

export default function MyItem({caption, imgname, refi}) {
  return (
    <div className='new'>
      <a href={refi}><img src={imgname} alt={imgname}></img></a>
      <p className="caption">{caption}</p>       
    </div>
  )
}
