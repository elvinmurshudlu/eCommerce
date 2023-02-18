import React from 'react'
import { useSelector } from 'react-redux'
import { BacketItem } from './BacketItem'
import s from "./style.module.css"

export  function BacketItems() {
  let products = Object.values(useSelector((state)=> state.backet.products))

  return (
    <div className={s.backetItems}>

      {products && products.map((product)=>(
        <BacketItem key={product.id} product={product}></BacketItem>

      ))}
        
    </div>
  )
}
