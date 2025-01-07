import React from 'react';

import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";

import Signup from './Signup';
import Login from './Login';
import Navbar from './Navbar';
import './App.css';
import { UserAuthContextProvider } from "./UserAuthContext";
function App() {
  return (
    <div className="App">
      
      <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;



