import React from 'react';
import '../styles/MyTextarea.css';

export default function MyTextarea({ type, isFor, name, placeholder, cols, rows, valu, isEdited, get }) {
  const taType = type+isFor;
  if (type==='ADD') {
  return (
    <>
      <textarea className={taType} onChange={(e) => get(e.target.value)} name={name} cols={cols} rows={rows} placeholder={placeholder} defaultValue={valu}></textarea><br></br>
    </>
  )} else
  return (
    <>
      <textarea readOnly className={taType} onChange={(e) => get(e.target.value)} name={name} cols={cols} rows={rows} placeholder={placeholder} defaultValue={valu}></textarea><br></br>
    </>
  )

}
