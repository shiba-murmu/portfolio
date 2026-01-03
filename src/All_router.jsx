import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './component/header/Navbar'
import Profile from './pages/user/Profile'
function All_router() {
    const location = useLocation();
     // routes where navbar should be hidden
  const hideNavbarRoutes = ["/portfolio-requesting"];

  const shouldHideNavbar = hideNavbarRoutes.some((path) =>
    location.pathname.startsWith(path)
  );
    return (
        <>
            {shouldHideNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<Navigate to={`/portfolio-requesting`} />} />
                <Route path='/portfolio-requesting' element={<Home />} />

                <Route path='/profile/:username' element={<Profile />} />
            </Routes>
        </>
    )
}

export default All_router