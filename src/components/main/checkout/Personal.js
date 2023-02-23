import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from "./style.module.css"

export default function Personal({header,information,location}) {
  let navigate = useNavigate()
  return (
    <div className={s.personal}>
        <h1>{header}</h1>
        <ul>
                {information && information.map((info,index)=>(
                    <li key={index}>{info}</li>
                ))}
        </ul>
        <button onClick={()=>navigate(location)} className={s.change}>Change</button>
    </div>
  )
}
