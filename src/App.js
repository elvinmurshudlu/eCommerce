import React, { useEffect } from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar"
import { Outlet } from 'react-router-dom';

import FetchData from "./api/FetchApi"
import { useDispatch, useSelector } from 'react-redux';
import {  getProductsFromApi } from './features/counter/counterSlice';
function App() {  

  //!səhifə yeniləndə köhnə dataları geri qaytarmaq üçün
  let dispatch = useDispatch()

  async function getBacketData(){
    let totalData = ((await FetchData.getData("backet")).data).backet
    //! Gələn sorğunun boş olub olmadığını yoxlamaq üçün , boşdursa funksiya işləməsin
    if(totalData){      
      dispatch(getProductsFromApi(totalData))
    }    
  }

  //!  useEffectsiz də yazmaq olar sadəcə -- getBacketData() --  kimi

  useEffect(()=>{    
    getBacketData()
  },[])
  
  
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  );
}

export default App;
