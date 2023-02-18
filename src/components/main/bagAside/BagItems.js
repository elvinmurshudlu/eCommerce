import React from 'react'
import { useSelector } from 'react-redux'
import { Bagİtem } from './Bagİtem'
import s from "./style.module.css"

export  function BagItems({backetItems}) {   


  return (
    <div className={s.bagItems}>
        {
            backetItems.map((backetItem,index)=>(
                <Bagİtem key={index} image={backetItem.img}></Bagİtem>
            ))
        }

        
    </div>
  )
}
