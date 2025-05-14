import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';
import Body from './pages/Body';
import Header from './pages/Header';
import Footer from './pages/Footer';

import AuthProvider from './pages/common/AuthProvider'; // ✅ Correct import

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="fixed-header">
          <Header />
        </div>

        <div className="content-wrapper">
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Body' element={<Body />} />
          </Routes>
        </div>

        <div className="fixed-footer">
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
