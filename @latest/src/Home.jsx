// import { useState } from 'react'
// import {  useNavigate} from "react-router-dom"
// import { Outlet } from 'react-router-dom'
// import { useState } from 'react';
import { AllProduct } from './components/AllProduct';
import  {Menu}  from './components/Menu';
import './style/Home.css';
import './style/fonts.css';



const Home = ({carList,handleDelete})=> {

  return (
    <>
    <div className='home'>
     <Menu />   
     <AllProduct  carList={carList} handleDelete={handleDelete}/>
     </div>
    </>
  )
}

export  {Home}

