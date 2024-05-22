import React from 'react'
import ReactDOM from 'react-dom/client'
import  { Home } from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root'))

  .render(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Navigate replace to='/' />}>
          {/* <Route path='/Home' element={</>}>  */}

        </Route>
      </Routes>
    </Router>

  );
