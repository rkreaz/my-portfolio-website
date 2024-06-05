import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Blogs from './components/Blog/Blogs';
import Home from './components/Home/Home';
import BlogOne from './components/Blog/Best-email-signature-safe-fonts';
import { useState } from 'react';
import Spinner from './assets/Spinner';
function App() {
  return (
    <div className="App">
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blogs/>}/>
        <Route path='/best-email-signature-safe-fonts' element={<BlogOne/>}/>
       </Routes>
       <Footer/>
       <ToastContainer />
    </div>
  );
}

export default App;
