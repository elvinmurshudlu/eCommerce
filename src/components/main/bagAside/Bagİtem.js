import React from 'react'
import s from "./style.module.css"

export  function Bagİtem({image}) {
  return (
    <div className={s.bagItem}>
        <img src={image[0]} alt="" />
    </div>
  )
}
