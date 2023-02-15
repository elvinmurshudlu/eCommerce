import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar"
import { Outlet } from 'react-router-dom';
import {Bag} from "./components/main/bagAside/Bag"
function App() {
  
  // console.log(getData())
  
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Bag></Bag>
    </>
  );
}

export default App;
