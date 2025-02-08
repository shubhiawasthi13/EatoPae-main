import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navb.jsx';
import Customer from './customer.jsx';
import Merchant from './merchant.jsx';
import AppDev from './Appdev.jsx';
import Uiux from './Uiux.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<App />} />
          <Route path="customer" element={<Customer />} />
          <Route path="merchant" element={<Merchant/>} />
          <Route path="appdev" element={<AppDev/>} />
          <Route path="uiux" element={<Uiux/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
)
