import React, { useEffect, useState } from 'react'
import { BagItems } from './BagItems'
import { Bagİtem } from './Bagİtem'
import s from "./style.module.css"
import { useSelector } from 'react-redux'

import {HiShoppingBag} from "react-icons/hi"
import { useNavigate } from 'react-router-dom'

export  function Bag(props) {
  let backetItems = Object.values(useSelector((state)=>state.backet.products))  
  // console.log("bagAside",backetItems)
  let [totalAmount,setTotalAmount] = useState(0)
  let amount = 0 

  let navigate = useNavigate()

  function getTotalAmount(){
    backetItems.map((item)=>{
      // totalAmount += (item.id * item.count)
      // setTotalAmount(totalAmount)
      // console.log(totalAmount)
      amount += (+item.price *  (+item.count))
      // console.log(item.price,item.count)
    })
    // amount = amount%1>0.999 ? amount.toFixed(3) : amount

    setTotalAmount(parseFloat(amount.toFixed(3)))
  }
  
  useEffect(()=>{
    getTotalAmount()
  })


  return (
    <div className={s.bagSection}>
      <h2>Bag</h2>
      <BagItems backetItems={backetItems}></BagItems>
      {props.checkout && <h4>Total Bag: {totalAmount}$</h4>}
      {props.checkout ? 
      <button className={s.button}><HiShoppingBag></HiShoppingBag>Check out</button> 
      : 
      <button onClick={()=> navigate('/backet')} className={s.button}><HiShoppingBag></HiShoppingBag>View Bag</button>}

      

    </div>
  )
}
