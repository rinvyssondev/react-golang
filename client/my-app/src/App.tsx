import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import './App.css';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cadastrar from './components/Cadastrar';

export function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <button onClick={()=> window.history.back()}>Voltar</button> */}
        <Routes>          
          <Route path='/' element={<Products />}/>
          <Route path='/cadastrar' element={<Cadastrar/>}/>          
        </Routes>
      </BrowserRouter>
    </div>
  )
}
