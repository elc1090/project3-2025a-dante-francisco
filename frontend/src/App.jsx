import './App.css'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import RoadMapsPage from './pages/RoadMapsPage'
import LoginPage from './pages/LoginPage'
import MarkDownPage from './pages/MarkDownPage'
import Header from './layouts/Header'

function App() {
  return (
    <>
    <Header />
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/roadmaps" element={<RoadMapsPage />} />
        <Route path="/criar-mark" element={<MarkDownPage />} />  
      </Routes>
    </>
  );
}

export default App;