import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './layouts/Header'
import HomePage from './pages/HomePage'
import RoadMapsPage from './pages/RoadMapsPage'
import LoginPage from './pages/LoginPage'
import MarkDownPage from './pages/MarkDownPage'

function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/roadmaps" element={<RoadMapsPage />} />
        <Route path="/mark" element={<MarkDownPage />} />
      </Routes>
    </>
  );
}

export default App;