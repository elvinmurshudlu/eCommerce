import React from 'react'
import { BacketItems } from '../Backet/BacketItems'
import s from "./style.module.css"
import {useDispatch, useSelector } from 'react-redux'
import { getProductsFromApi } from '../../../features/counter/counterSlice'
import FetchData from '../../../api/FetchApi'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Personal from './Personal'




export default function Checkout() {
  
  let [personalData,setPersonalData] = useState([])

  let [totalAmount,setTotalAmount] = useState(0)
  let amount = 0 
  
  
  let backetItems = Object.values(useSelector((state)=>state.backet.products))
  
  useEffect(()=>{    
      getBacketData()
      getPersonalData()
    //   getTotalAmount()
    },[])
    

    
  function getTotalAmount(){
  

    backetItems.map((item)=>{  
      amount += (+item.price *  (+item.count))      
    })
    setTotalAmount(parseFloat(amount.toFixed(3)))
  }
  //!səhifə yeniləndə köhnə dataları geri qaytarmaq üçün
    let dispatch = useDispatch()
    async function getBacketData(){
    let totalData = ((await FetchData.getData("backet")).data).backet
    //! Gələn sorğunun boş olub olmadığını yoxlamaq üçün , boşdursa funksiya işləməsin
    if(totalData){      
    dispatch(getProductsFromApi(totalData))
    }    
}  

useEffect(()=>{
    getTotalAmount()
    // getPersonalData()
  })


  async function getPersonalData(){
    let data = (await FetchData.getData("personal")).data
    
    setPersonalData(data)
  }



  let shippingAddress = personalData.address
  let payment = personalData.payment
  

  return (
    <>
    <main className={s.checkout}>
        <Personal header={"Shipping Address"} information={shippingAddress}></Personal>
        <Personal header={"Payment Method"} information={payment}></Personal>
        <BacketItems backetItems={backetItems}></BacketItems>
    </main>
    <div className="purchase">
        <div className={s.price}>
            <h1>Order Summary</h1>
            <p>Orders :${totalAmount}</p>
            <p>Shipping :${}</p>
            <p>Estimated :${}</p>
            <p>Gift Card :${}</p>
            <hr />
            <p>Order Total :${totalAmount}</p>
            <hr />
            <button className={s.button}>Place Order</button>
            
        </div>
    </div>
    </>
    
  )
}
