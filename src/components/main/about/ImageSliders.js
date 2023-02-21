import React from 'react'
import ImageSlideItem from './ImageSlideItem'
import s from "./style.module.css"



export default function ImageSliders({images ,changePicture}) {
  return (
    <div className={s.imageSlider}>
        {
            images && images.map((image,index)=>(
                <ImageSlideItem changePicture={changePicture} key={index} imageUrl={image} index={index}></ImageSlideItem>
            ))
        }

        {/* <ImageSlideItem></ImageSlideItem>
        <ImageSlideItem></ImageSlideItem>
        <ImageSlideItem></ImageSlideItem> */}
    </div>
  )
}
