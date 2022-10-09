import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import RegisterScreen from '../pages/RegisterScreen';

const StackRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/login' element={<Form />} />
      </Routes>
    </Router>
  )
}

export default StackRoutes;