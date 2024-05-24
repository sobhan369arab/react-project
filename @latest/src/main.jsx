// import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Home.jsx';
import { AllProduct } from './components/AllProduct.jsx';
import { Menu } from './components/Menu.jsx';

ReactDOM.createRoot(document.getElementById('root'))

  .render(
    <Router>
      <Routes>
        <Route path='/Home' element={<Navigate replace to='/' />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/AllProduct' element={<AllProduct />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
