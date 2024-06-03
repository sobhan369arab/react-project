
import { Home } from './Home.jsx';
import { AllProduct } from './components/AllProduct.jsx';
import { Menu } from './components/Menu.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AddProduct } from './components/AddProduct.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { EditProduct } from './components/EditProduct.jsx';

// { name: "BMW", score: 9, color: "Blue", price: 20000 },
//     { name: "Mercedes Benz", score: 7, color: "White", price: 47000 },
//     { name: "McLaren", score: 10, color: "Yellow", price: 9600 },
//     { name: "Audi", score: 8.5, color: "Red", price: 58000 },
//     { name: "Porsche", score: 9.5, color: "Black", price: 20000 },
//     { name: "Lamborghini", score: 7.8, color: "green", price: 350000 }

const Routers = () => {
  const [carList, setCarList] = useState([

  ]);

  /* get car list  */
  const getCarList = async () => {
    const res = await axios.get(`https://6653aa591c6af63f46754aa6.mockapi.io/users`);
    setCarList(res.data);

  }

  useEffect(() => {
    getCarList();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home carList={carList} />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/AllProduct' element={<AllProduct carList={carList} setCarList={setCarList} />} />
        <Route path='/AddProduct' element={<AddProduct carList={carList} setCarList={setCarList}   getCarList={getCarList}/>} />
        <Route path='/EditProduct' element={<EditProduct carList={carList} />} />
        <Route path='/' element={<Navigate replace to='/Home' />} />
      </Routes>

    </BrowserRouter>


  )
}

export { Routers }