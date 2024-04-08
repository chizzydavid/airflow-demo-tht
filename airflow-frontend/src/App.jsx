import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Home, ListDags, CreateDag } from './pages';
import './App.css'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list-dags" element={<ListDags />} />
      <Route path="/create-dag" element={<CreateDag />} />
    </Routes>
  )
}

export default App
