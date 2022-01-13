import React from 'react'

export default function MyTextarea({ name, placeholder, cols, rows }) {
  return (
    <>
      <textarea resize="none" name={name} cols={cols} rows={rows} placeholder={placeholder}></textarea><br></br>
    </>
  )
}
