import React from 'react'
import s from "./style.module.css"
import {BsBagPlusFill} from "react-icons/bs"
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../../features/counter/counterSlice'
export  function ProductItem({imageUrl , productName,productSeries,price,id}) {
  let dispatch = useDispatch()
  function addBacket(){
    dispatch(addProduct({imageUrl,productName,productSeries,price,id}))
    // console.log(imageUrl,productName,productSeries,price,id)

  }

  return (
    <div key="hgf" className={s.product}>
      <div className={s.image}>
        <img src={imageUrl} alt={productName} />
      </div>

      <div className={s.productContent}>
        <h4>{productName}</h4>
        <p>{productSeries}</p>
        <div className={s.price}>

          <span>$ {price}</span>
          <button onClick={addBacket}><BsBagPlusFill></BsBagPlusFill></button>
          
        </div>

      </div>

    </div>
  )
}
