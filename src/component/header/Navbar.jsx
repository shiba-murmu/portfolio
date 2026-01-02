import React ,{useEffect, useState} from 'react'

function Navbar() {
    const [websiteHeading, setWebsiteHeading] = useState(null)
    useEffect(() => {
        setWebsiteHeading('DevFolio.io')
    }, [])
    return (
        <>
            <div className='bg-(--color-primary) text-white font-domine p-4 flex items-center h-16 md:h-20'>
                <span className='text-2xl '>{websiteHeading}</span>
            </div>
    </>
  )
}

export default Navbar