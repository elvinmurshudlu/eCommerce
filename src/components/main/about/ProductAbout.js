import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FetchData from '../../../api/FetchApi'
import axios from "axios"

export default function ProductAbout() {    
    const {id} = useParams()
    let [data,setData] = useState()
    async function getData(){
      
     let response = (await axios("http://localhost:3200/products/"+id)).data
    //  console.log(response)
     setData(response)

     
    }


    useEffect(()=>{
      getData()

    },[])
    // console.log(data)

    
  return (
    <main>{data ? data.name : "Mehsul yoxdur"}</main>
    
  )
}
