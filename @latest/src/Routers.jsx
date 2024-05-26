// import React from 'react'
// import ReactDOM from 'react-dom/client'
import { Home } from './Home.jsx';
import { AllProduct } from './components/AllProduct.jsx';
import { Menu } from './components/Menu.jsx';
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import { AddProduct } from './components/AddProduct.jsx';
import { useState } from 'react';


const Routers = () => {
  const [carList, setCarList] = useState([
    { name: "BMW", score: 9, color: "Blue", price: 20000 },
    { name: "Mercedes Benz", score: 7, color: "White", price: 47000 },
    { name: "McLaren", score: 10, color: "Yellow", price: 9600 },
    { name: "Audi", score: 8.5, color: "Red", price: 58000 },
    { name: "Porsche", score: 9.5, color: "Black", price: 20000 },
    { name: "Lamborghini", score: 7.8, color: "green", price: 350000 }
  ]);

  const handleDelete = (name) => {
    const filterData = carList.filter((f) => f.name !== name);
    setCarList(filterData)
  }

  const onSubmit = (values) => {
    setCarList([...carList, values]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home  carList={carList} handleDelete={handleDelete} />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/AllProduct' element={<AllProduct carList={carList} handleDelete={handleDelete} />} />
        <Route path='/AddProduct' element={<AddProduct onSubmit={onSubmit} />} />
        <Route path='/' element={<Navigate replace to='/Home' />} />
      </Routes>
    </BrowserRouter>


  )
}

export { Routers }