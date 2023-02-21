import React from 'react'
import {BsBagPlusFill} from "react-icons/bs"
import { addProduct } from '../../../../features/counter/counterSlice'
import { useDispatch } from 'react-redux'



export default function AddBacket({product}) {

    let dispatch = useDispatch()
    function addBacket(e){    
      dispatch(addProduct(product))    
      e.stopPropagation()
    }
  

  return (
    <button onClick={(e)=>addBacket(e)}><BsBagPlusFill></BsBagPlusFill></button>
    
  )
}
