import React from 'react'
import s from "./style.module.css"
import {BsBagPlusFill} from "react-icons/bs"
import { useDispatch,useSelector } from 'react-redux'
import { addProduct } from '../../../../features/counter/counterSlice'
import FetchData from "../../../../api/FetchApi"
import { useNavigate } from 'react-router-dom'

export  function ProductItem({product}) {
  let navigate = useNavigate()
   
  
  let dispatch = useDispatch()
  function addBacket(e){    
    dispatch(addProduct(product))    
    e.stopPropagation()
  }

  

  return (
    <div onClick={()=>navigate("about/"+product.id)} className={s.product}>
      <div className={s.image}>
        <img src={product.img[0]} alt={product.name} />
      </div>

      <div className={s.productContent}>
        <h4>{product.name}</h4>
        <p>{product.model}</p>
        <div className={s.price}>

          <span>$ {product.price}</span>
          <button onClick={(e)=>addBacket(e)}><BsBagPlusFill></BsBagPlusFill></button>
          
        </div>

      </div>

    </div>
  )
}
