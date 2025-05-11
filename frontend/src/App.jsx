import React from 'react'
import Main from './pages/Main'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from "react-router"
import './App.css';
import Header from './pages/Header'
import Footer from './pages/Footer';

function App() {

  return (
    <>
  <BrowserRouter>
      <div className="fixed-header">
        <Header />
      </div>

      <div className="content-wrapper">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>

      <div className="fixed-footer">
        <Footer />
      </div>
    </BrowserRouter>

    </>
  )
}

export default App
