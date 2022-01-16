import React, {useState} from 'react'

export default function MyTextarea({ name, placeholder, cols, rows, valu, isEdited, bgc, get }) {
  const [val, setVal] = useState(valu);
  return (
    <>
      <textarea onChange={(e) => get(e.target.value)} background-color={bgc} readOnly={!isEdited} name={name} cols={cols} rows={rows} placeholder={placeholder} defaultValue={valu}></textarea><br></br>
    </>
  )
}
