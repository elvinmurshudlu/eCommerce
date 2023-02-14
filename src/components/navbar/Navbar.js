import React from 'react'
import s from "../navbar/style.module.css"
import nvlogoOne from "../navbar/assets/Group.svg"
import nvlogoTwo from "../navbar/assets/Vector.svg"
import nvlogoThree from "../navbar/assets/Vector1.svg"
import nvlogoFour from "../navbar/assets/Vector3.svg"



export  function Navbar() {
  return (
    <nav className={s.navbar}>
        <div className={s.icons}>
           <img src={nvlogoOne}></img>
           <img src={nvlogoTwo}></img>
           <img src={nvlogoThree}></img>
           <img src={nvlogoFour}></img>
        </div>
    </nav>
  )
}
