import React from 'react'
import s from "./style.module.css"
import { addProduct, removeProduct } from '../../../features/counter/counterSlice'
import { useDispatch } from 'react-redux'
import FetchData from '../../../api/FetchApi'
import ProductStars from './ProductStars'

export  function BacketItem({product}) {

    let dispatch = useDispatch()
  function addBacket(){
    dispatch(addProduct(product))    

  }

  function removeBacket(){
    dispatch(removeProduct(product))
  }
  
  

  return (
    <div className={s.backetItem}>
        <div className={s.backetItemImage}>
            <img src={product.img[0]} alt="" />
        </div>
        <div className={s.backetItemContent}>
            <h1>{product.name}</h1>
            <h4>{product.model}</h4>
            <p>{product.info}</p>
            
            <div className={s.rating}><span><ProductStars rating={product.rating}></ProductStars></span> <span>{product.rating} / 5</span></div>
            <div className={s.productCount}>
                <span>${product.price} x {product.count}</span>
                <span className={s.countControl}><span style={{color:"red"}} onClick={removeBacket}>-</span><span>{product.count}</span><span style={{color:"green"}} onClick={addBacket}>+</span></span>
                    
            </div>
        </div>
    </div>
  )
}
