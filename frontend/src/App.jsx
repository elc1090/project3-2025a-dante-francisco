import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MarkDownPage from './pages/MarkDownPage'
import Header from './layouts/Header'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
    <Header></Header>
    <HomePage></HomePage>
    </>
  );
}

export default App;