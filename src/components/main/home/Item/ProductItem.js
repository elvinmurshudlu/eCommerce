import React from 'react'
import s from "./style.module.css"
import {BsBagPlusFill} from "react-icons/bs"
import { useDispatch,useSelector } from 'react-redux'
import { addProduct } from '../../../../features/counter/counterSlice'
import FetchData from "../../../../api/FetchApi"

export  function ProductItem({product}) {
  
  
  
  let dispatch = useDispatch()
  function addBacket(){
    dispatch(addProduct(product))    

  }

  return (
    <div  className={s.product}>
      <div className={s.image}>
        <img src={product.img[0]} alt={product.name} />
      </div>

      <div className={s.productContent}>
        <h4>{product.name}</h4>
        <p>{product.model}</p>
        <div className={s.price}>

          <span>$ {product.price}</span>
          <button onClick={addBacket}><BsBagPlusFill></BsBagPlusFill></button>
          
        </div>

      </div>

    </div>
  )
}
