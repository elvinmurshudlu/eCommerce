import React from 'react'
import { useSelector } from 'react-redux'
import { Bagİtem } from './Bagİtem'
import s from "./style.module.css"

export  function BagItems() {

    let backetItems = Object.values(useSelector((state)=>state.backet.products))
    
    

  return (
    <div className={s.bagItems}>
        {
            backetItems.map((backetItem,index)=>(
                <Bagİtem key={index} image={backetItem.imageUrl}></Bagİtem>
            ))
        }

        
    </div>
  )
}
