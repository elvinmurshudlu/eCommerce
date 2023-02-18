import React from 'react'
import { BacketItems } from './BacketItems'
import s from "./style.module.css"

export  function Backet() {
  return (
    <div className={s.main}>

      <h1>Check Your Bag Items</h1>
      <BacketItems></BacketItems>


    </div>
  )
}
