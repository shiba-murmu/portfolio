import React from 'react'
import { useParams } from 'react-router-dom'
function Home() {
    const { name } = useParams();

    const WallpaperDesign = () => {
        return (
            <div className='flex items-center justify-center'>
                <h1 className='text-4xl font-bold'>Wallpaper Design</h1>
            </div>
        );
    }

    return (
        <>
            <div className='flex items-center text-center bg-(--color-secondary) flex-col justify-between px-6 py-4'>
                <div>
                    {/* main div for the outer div */}
                    <div className='flex mt-10 flex-col md:flex-col justify-between items-center gap-6 md:gap-6 '>
                        <div >
                            <span className='bg-[#0e0a26] text-sm md:text-lg border border-(--color-button-background) md:px-9 px-5 py-2 p-1 rounded-full text-(--color-button-background) font-bold shadow-2'> <span>
                            </span> Now accepting new client's for 2026</span>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <span
                                className='font-orbitron-bold md:text-7xl text-4xl'
                            >
                                We build <span className='text-(--color-button-background)'>digital legacies</span>.
                            </span>
                            <span
                                className='text-md  md:text-2xl text-(--color-text-gray)'
                            >
                                Transform your professional journey <br className='block md:hidden' />  into a stunning digital portfolio. <br />
                                We design custom web experiences <br className='block md:hidden' /> that tell your story.
                            </span>
                        </div>
                    </div>
                    <div className='md:flex flex flex-col md:flex-row  mt-3 md:mt-10 md:text-2xl md:justify-center gap-5 md:gap-10'>
                        <div className=''>
                            <button className='hover:cursor-pointer bg-(--color-button-background) shadow-2 shadow-(--color-button-background) px-10 md:px-14 py-4 rounded-lg font-bold md:py-5'>Start Your Request</button>
                        </div>
                        <div className=''>
                            <button className='bg-[#0f172a] hover:cursor-pointer font-bold border-[#555663] border  px-13 py-4 md:px-14 md:py-5 rounded-lg'>View Our Work</button>
                        </div>
                    </div>
                    <div className='hidden md:flex  mt-10 text-sm md:text-xl md:font-thin   items-center md:gap-20 justify-center text-(--color-text-gray) '>
                        <div className='flex items-center gap-2'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4 md:h-6 md:w-6' viewBox="0 -960 960 960" fill="currentColor"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z" /></svg>
                            </span>
                            <span>
                                Besspoke Design
                            </span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4 md:h-6 md:w-6' viewBox="0 -960 960 960"  fill="currentColor"><path d="M480-540ZM80-160v-80h400v80H80Zm120-120q-33 0-56.5-23.5T120-360v-360q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720H200v360h280v80H200Zm600 40v-320H640v320h160Zm-180 80q-25 0-42.5-17.5T560-220v-360q0-25 17.5-42.5T620-640h200q25 0 42.5 17.5T880-580v360q0 25-17.5 42.5T820-160H620Zm100-300q13 0 21.5-9t8.5-21q0-13-8.5-21.5T720-520q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9Zm0 60Z" /></svg>
                            </span>
                            <span>
                                Responsive
                            </span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 md:h-8 md:w-8'  viewBox="0 -960 960 960"  fill="currentColor"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
                            </span>
                            <span>
                                Clean code
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <WallpaperDesign />
                </div>
            </div>
            <div>
                {/* Add your portfolio content here */}
            </div>
        </>
    )
}

export default Home