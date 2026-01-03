import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './component/header/Navbar'
import Profile from './pages/user/Profile'
function All_router() {
    const [user, setUser] = useState('original')
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to={`/portfolio/${user}`} />} />
                <Route path='/portfolio/:name' element={<Home />} />
                <Route path='/profile/:username' element={<Profile />} />
            </Routes>
        </>
    )
}

export default All_router