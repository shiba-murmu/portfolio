import React from 'react'
import { useParams } from 'react-router-dom'
function Home() {
    const { name } = useParams();
  return (
    <>
        <div className='flex items-center text-center bg-(--color-secondary) flex-col justify-between px-6 py-4'>
            <div>
                {/* main div for the outer div */}
                <div className='flex mt-10 flex-col md:flex-col justify-between items-center gap-6 md:gap-6 '>
                    <div >
                        <span className='bg-[#0e0a26] text-sm md:text-md border border-(--color-button-background) md:px-9 px-5 py-2 text-white p-1 rounded-full'>Now accepting new client's for 2026</span>
                    </div>
                    <div className='flex flex-col'>
                        <span
                        className='font-orbitron-bold md:text-7xl text-4xl'
                        >
                            We build <span className='text-(--color-button-background)'>digital legacies</span>.
                        </span>
                        <span
                            className=''
                        >
                            Transform your professional journey into a stunning digital portfolio.
                            We design custom web experiences that tell your story.
                        </span>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
            <div>
                <span>Portfolio of {name}</span>
    
            </div>
        </div>
        <div>
            {/* Add your portfolio content here */}
        </div>
    </>
  )
}

export default Home