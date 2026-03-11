import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from "./components/Container.jsx"
import Image from "./components/Image.jsx"

function App() {

  return (
    <>
        <div className="layout">
          <Container/>
          <Image/>
        </div>
    </>
  )
}

export default App
