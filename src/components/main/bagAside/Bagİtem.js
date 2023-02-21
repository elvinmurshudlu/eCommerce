import React from 'react'
import s from "./style.module.css"

export  function Bagİtem({item}) {
  console.log(item.count)
  return (
    <div className={s.bagItem}>
        <img src={item.img[0]} alt="" />
        <span className={s.productCount}>{item.count}</span>
    </div>
  )
}
