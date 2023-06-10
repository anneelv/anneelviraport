import React from 'react'
import Image from 'next/legacy/image'

const HomeOtherData = ({thumbImg, message}) => {

    return (
        <div className = 'relative'>
            <Image src={thumbImg} alt='/' className='w-full h-full' 
            layout='responsive' width = '677' height = '451' />
            {/* Overlay */}
            <div className = 'flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
                <p className = 'text-gray-300 hidden group-hover:block'>{message}</p>
            </div>
        </div>
    )
}

export default HomeOtherData;