import React, { useEffect, useState } from 'react'

function Navbar() {
    const [websiteHeading, setWebsiteHeading] = useState(null)
    useEffect(() => {
        setWebsiteHeading('DevFolio.io')
    }, [])
    return (
        <>
            <div className='bg-(--color-primary) text-white font-domine p-4 flex items-center h-16 md:h-20'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" className='bg-()' viewBox="0 -960 960 960" width="24px" fill='currentColor'><path d="m384-336 56-57-87-87 87-87-56-57-144 144 144 144Zm192 0 144-144-144-144-56 57 87 87-87 87 56 57ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg>
                </span>
                <span className='text-2xl '>{websiteHeading}</span>
            </div>
        </>
    )
}

export default Navbar