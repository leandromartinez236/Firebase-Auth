import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import SigIn from '../pages/SigIn';

const StackRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/sigin' element={<SigIn />} />
        <Route path='/signup' element={<Form />} />
      </Routes>
    </Router>
  )
}

export default StackRoutes;