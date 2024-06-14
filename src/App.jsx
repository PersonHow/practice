import { useState } from 'react'
import './App.css'
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from './Food.jsx'
function App() {

  return (
    <>
      <Header />
      <Food />
      <button id="btn">btn</button>
      <Footer />
    </>
  )
}

export default App
