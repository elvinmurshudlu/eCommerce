import React, { useEffect, useState } from 'react'
import { ProductItem } from './Item/ProductItem'
import s from "./style.module.css"
import axios from "axios";


export  function TotalProducts({searchedItem}) {
  let [products ,setProducts] = useState()

  // console.log(searchedItem)
  

  async function getData(){
    let response = await axios("http://localhost:3200/products")

    if(!searchedItem){      
    setProducts(response.data)
    }else{
      let filteredItems = []
      let currentName 
      for(let a =0;a<response.data.length;a++){
        currentName =(response.data[a].name ).toLowerCase()
        if(currentName.includes(searchedItem.toLowerCase())){
        // console.log(response.data[a].name)
        filteredItems.push(response.data[a])
        }
      }
      // console.log(response.data.length)
      setProducts(filteredItems)
    }    
  }

  useEffect(()=>{
    getData()
    
  },[searchedItem])

// console.log(products)
  return (
    <div className={s.products}>
    {products && products.map((product,index)=>(
      <ProductItem key={index} product={product} ></ProductItem>
    ))
    }
   

    </div>
    )
}
