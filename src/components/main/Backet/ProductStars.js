import React from 'react'
import { Star as StarEmpty, StarFill, StarHalf } from "react-bootstrap-icons";
import s from "./style.module.css"


export default function ProductStars({rating}) {
    let stars = []
    let fullStar = Math.floor(rating)
    let isStarHalf = 5 - Number(rating) >= 0.5
    let halfStar = 5 - Math.floor(rating) - (isStarHalf ? 1 : 0)
  // Push the filled star icons
  for (let i = 0; i < fullStar; i++) {
    stars.push(<StarFill key={"star-fill" + i} />);
  }
  if (isStarHalf) {
    stars.push(<StarHalf key="star-half" />);
  }
  for (let i = 0; i < halfStar; i++) {
    stars.push(<StarEmpty key={"star-empty" + i} />);
  }



  return (
    <div className={s.stars}>{stars}</div>
  )
}
