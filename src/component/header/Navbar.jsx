import React ,{useEffect, useState} from 'react'

function Navbar() {
    const [websiteHeading, setWebsiteHeading] = useState(null)
    useEffect(() => {
        setWebsiteHeading('Global PortFolio')
    }, [])
    return (
        <>
            <div className='bg-gray-800 text-white ubuntu-bold p-4 flex items-center h-16 md:h-20'>
                <span className='text-2xl '>{websiteHeading}</span>
            </div>
    </>
  )
}

export default Navbar