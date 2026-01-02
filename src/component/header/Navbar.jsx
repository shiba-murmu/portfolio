import React, { useEffect, useState } from 'react'

function Navbar() {
    const [websiteHeading, setWebsiteHeading] = useState(null)
    useEffect(() => {
        setWebsiteHeading('DevFolio.io')
    }, [])
    return (
        <>
            <div className='bg-(--color-primary) text-white font-domine p-4 flex items-center h-16 md:h-20 gap-1  md:gap-3'>
                <span>
                    <svg width="40px" height="40px" className='fill-(--color-button-background) rounded-2xl' fill='currentColor' viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15 1H1V15H15V1ZM6 5L7.41421 6.41421L5.82843 8L7.41421 9.58579L6 11L3 8L6 5ZM10 5L8.58579 6.41421L10.1716 8L8.58579 9.58579L10 11L13 8L10 5Z" fill=''  />
                    </svg>


                </span>
                <span className='text-2xl '>{websiteHeading}</span>
            </div>
        </>
    )
}

export default Navbar