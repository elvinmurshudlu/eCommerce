import React from 'react'
import s from "./style.module.css"



export default function ImageSlideItem({imageUrl,changePicture,index}) {
    // changePicture(index)



  return (
    <div onClick={()=>changePicture(index)} className={s.imageItem}>
        <img src={imageUrl} alt="" />
    </div>
  )
}
