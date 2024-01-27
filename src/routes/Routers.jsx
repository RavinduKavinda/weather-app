import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../pages/Main/Main'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={Main}/>
    </Routes>
  )
}

export default Routers