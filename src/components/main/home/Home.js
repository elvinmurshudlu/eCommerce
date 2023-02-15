import React, { useState } from 'react'
import { ProductItem } from './Item/ProductItem'
import { SearchBar } from './Item/SearchBar'
import s from "./style.module.css"
import { TotalProducts } from './TotalProducts'
export  function Home() {

  let [searchedItem,setSearchedItem]  = useState("")

  function search(item){
    setSearchedItem(item.trim())
  }
  



  return (
    // <ProductItem></ProductItem>
    <main className={s.main}>
    <SearchBar search={search}  ></SearchBar>
    <TotalProducts searchedItem ={searchedItem}></TotalProducts>

    </main>
    )
}
