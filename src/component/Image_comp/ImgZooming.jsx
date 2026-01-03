import React from 'react'

function ImgZooming( {img_src}) {
    return (
        <>
            <div className="relative overflow-hidden rounded-2xl group">
                <img
                    src={img_src}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20"></div>
            </div>
        </>
    )
}

export default ImgZooming