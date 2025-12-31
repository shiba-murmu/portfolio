import React from 'react'
import { useParams } from 'react-router-dom'
function Home() {
    const { name } = useParams();
  return (
    <>
        <div>
            Portfolio here : {name}
        </div>
        <div>
            {/* Add your portfolio content here */}
        </div>
    </>
  )
}

export default Home