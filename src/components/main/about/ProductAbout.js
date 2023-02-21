import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FetchData from '../../../api/FetchApi'
import axios from "axios"
import s from "./style.module.css"
import ImageSliders from './ImageSliders'

import ProductStars from '../Backet/ProductStars'
import AddBacket from '../home/Item/AddBacket'


export default function ProductAbout() {    
    const {id} = useParams()
    let [data,setData] = useState()
    let [currentImage,setCurrentImage] = useState()
    async function getData(){
      
     let response = (await axios("http://localhost:3200/products/"+id)).data
    //  console.log(response)
     setCurrentImage(response.img[0])
     setData(response)

     
    }

    function changePicture(index){
      setCurrentImage(data.img[index])
    }



    useEffect(()=>{
      getData()

    },[])
    // console.log(data)

    let navigate = useNavigate()
  return (
    // <main className={s.main}>
    //   <div style={{cursor:"pointer"}} onClick={()=>navigate("/")}>{"< Back"}</div>
    //   <div className={s.product}>
    //     <div className={s.productImages}>
    //       <ImageSliders changePicture={changePicture} images={data && data.img}></ImageSliders>
    //       <div className={s.mainImage}>
    //         <img src={currentImage} alt={data && data.name} />
    //       </div>
 
    //     </div>
    //     <div className={s.content}>
    //     {
    //           data&& (<><div className={s.productName}>{data.name}</div>
    //           <div className={s.productModel}>{data.model}</div>
    //           <div className={s.productStars}><ProductStars rating={data.rating}></ProductStars> {data && data.rating}/5</div>
    //           <div className={s.productPrice}>$ {data.price}</div>
    //           <div className="title">{data.info}</div></>
    //           )
    //           }
    //     </div>
    //     <div className={s.addBacket}>
    //       <AddBacket product={data}></AddBacket>
    //     </div>
        

        
    //   </div>
    // </main>
    <>{data ? (<main className={s.main}>
      <div style={{cursor:"pointer"}} onClick={()=>navigate("/")}>{"< Back"}</div>
      <div className={s.product}>
        <div className={s.productImages}>
          <ImageSliders changePicture={changePicture} images={data.img}></ImageSliders>
          <div className={s.mainImage}>
            <img src={currentImage} alt={data && data.name} />
          </div>
 
        </div>
        <div className={s.content}>
        {
              data&& (<><div className={s.productName}>{data.name}</div>
              <div className={s.productModel}>{data.model}</div>
              <div className={s.productStars}><ProductStars rating={data.rating}></ProductStars> {data.rating}/5</div>
              <div className={s.productPrice}>$ {data.price}</div>
              <div className="title">{data.info}</div></>
              )
              }
        </div>
        <div className={s.addBacket}>
          <AddBacket product={data}></AddBacket>
        </div>
        

        
      </div>
    </main>
    ) :(<main className={s.main}>Mehsul yoxdur</main>)}</>
    
  )
}
