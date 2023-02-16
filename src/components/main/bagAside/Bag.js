import React from 'react'
import { BagItems } from './BagItems'
import { Bagİtem } from './Bagİtem'
import s from "./style.module.css"

import {HiShoppingBag} from "react-icons/hi"

export  function Bag() {
  return (
    <div className={s.bagSection}>
      <h2>Bag</h2>
      <BagItems></BagItems>
      <button className={s.button}><HiShoppingBag></HiShoppingBag>View Bag</button>

    </div>
  )
}
