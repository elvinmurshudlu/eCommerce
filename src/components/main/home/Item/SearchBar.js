import React from 'react'
import s from "./style.module.css"


export  function SearchBar({search}) {




  return (
    <div className={s.searchBox}>
        <label htmlFor="searchBox">Search Item</label>
        <input onChange={(e)=>search(e.target.value)} id='searchBox' type="text" placeholder='Apple Watch ,Samsung S21 ...'></input></div>
  )
}
