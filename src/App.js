import './App.css';
import LogIn from './components/login pages/LogIn';
import SignUp from './components/login pages/SignUp';
import ForgotPassword from './components/login pages/ForgotPassword';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useState } from "react";



function App() {
  return (
    <Router> {/* Wrap your Routes with Router */}
      <div className="App">
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>       
      </div>
    </Router> 
  );
}

export default App;
