import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


function Navbar() {
    const [websiteHeading, setWebsiteHeading] = useState(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    // Wrapper ref for BOTH button + menu
    const menuWrapperRef = useRef(null)

    useEffect(() => {
        setWebsiteHeading('DevFolio.io')
    }, [])

    useEffect(() => {
        setIsMenuOpen(false)
    }, [location.pathname])


    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                menuWrapperRef.current &&
                !menuWrapperRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false)
            }
        }

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMenuOpen])

    return (
        <>
            <div className='bg-(--color-primary) text-white font-domine p-4 flex items-center h-16 justify-between md:h-20 gap-1 md:gap-3'>

                {/* Left */}
                <div className='flex items-center gap-2'>
                    <span>
                        <svg
                            width="40px"
                            height="40px"
                            className='fill-(--color-button-background) rounded-2xl'
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15 1H1V15H15V1ZM6 5L7.41421 6.41421L5.82843 8L7.41421 9.58579L6 11L3 8L6 5ZM10 5L8.58579 6.41421L10.1716 8L8.58579 9.58579L10 11L13 8L10 5Z"
                            />
                        </svg>
                    </span>
                    <span className='text-2xl'>{websiteHeading}</span>
                </div>

                {/* Right */}
                <div ref={menuWrapperRef} className='relative'>

                    {/* Toggle Button (Mobile only) */}
                    <button
                        onClick={() => setIsMenuOpen(prev => !prev)}
                        className='md:hidden'
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? (
                            // Close icon
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className='h-9 w-9 fill-white'
                                viewBox="0 -960 960 960"
                            >
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                            </svg>
                        ) : (
                            // Hamburger icon
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className='h-9 w-9'
                                viewBox="0 -960 960 960"
                                fill="currentColor"
                            >
                                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                            </svg>
                        )}
                    </button>

                    {/* Desktop Menu */}
                    <ol className='hidden md:flex gap-6 text-lg'>
                        <li><Link to="/admin/login">Admin</Link></li>
                        <li><Link to="/admin/login">Dashboard</Link></li>
                        <li><Link to="/admin/login">Settings</Link></li>
                    </ol>

                    {/* Mobile Dropdown Menu */}
                    {isMenuOpen && (
                        <div className='absolute right-0 top-14 w-48 bg-(--color-primary) text-white rounded-xl shadow-lg p-4 md:hidden'>
                            <ol className='flex flex-col gap-4'>
                                <li>
                                    <Link to="/admin/login" onClick={() => setIsMenuOpen(false)}>
                                        Admin
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/login" onClick={() => setIsMenuOpen(false)}>
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/login" onClick={() => setIsMenuOpen(false)}>
                                        Settings
                                    </Link>
                                </li>
                            </ol>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Navbar
