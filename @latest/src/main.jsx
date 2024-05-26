// import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Home } from './Home.jsx';
// import { AllProduct } from './components/AllProduct.jsx';
// import { Menu } from './components/Menu.jsx';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import {AddProduct} from './components/AddProduct.jsx';

import { Routers } from "./Routers";

// import { Routers } from "./Routes";


ReactDOM.createRoot(document.getElementById('root')).render(<Routers />);
    
    // <Router>
    //   <Routes>
    //     <Route path='/Home' element={<Home />} />
    //     <Route path='/Menu' element={<Menu />} />
    //     <Route path='/AllProduct' element={<AllProduct />} />
    //     <Route path='/AddProduct' element={<AddProduct />} />
    //     <Route path='/' element={<Navigate replace to='/Home' />} />
    //   </Routes>
    // </Router>
  
