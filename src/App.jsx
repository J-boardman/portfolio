import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/About'
import Projects from './pages/Projects'
import Layout from "./components/Layout"

export default () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  )
}