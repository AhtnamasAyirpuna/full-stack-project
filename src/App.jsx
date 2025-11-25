import React from 'react';
import Navbar from './components/Navbar';
import { useLocation, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { AuthProvider } from './context/AuthProvider';

function App() {

  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <AuthProvider>
      <div>
        {!isOwnerPath && <Navbar />}
        <div className='min-h-[70vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>

  )
}

export default App