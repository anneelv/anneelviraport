import React from 'react';
import Image from 'next/legacy/image';

const OthersProject = () => {
    return (
        <div className = 'max-w-[1240px] mx-auto py-16 text-center'>
            <h1 className = 'font-bold text-2xl p-4'>FrontEnd Designs</h1>
            <div className = 'grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
                <div className = 'w-full h-full col-span-2 md:col-span-3 row-span-2'>
                    <Image src = '/imgs/frontend/productreview-preview.jpg' 
                    alt = '/'
                    layout = 'responsive'
                    width = '677'
                    height = '451'
                    />
                </div>
                <div className = 'w-full h-full'>
                    <Image src = '/imgs/frontend/qrcode-preview.jpg' 
                    alt = '/'
                    layout = 'responsive'
                    width = '215'
                    height = '217'
                    object-fit = 'cover'
                    />
                </div>
                <div className = 'w-full h-full'>
                    <Image src = '/imgs/python/tictactoe-preview.jpg' 
                    alt = '/'
                    layout = 'responsive'
                    width = '215'
                    height = '217'
                    object-fit = 'cover'
                    />
                </div>
                <div className = 'w-full h-full'>
                    <Image src = '/imgs/Alt.jpg' 
                    alt = '/'
                    layout = 'responsive'
                    width = '215'
                    height = '217'
                    object-fit = 'cover'
                    />
                </div>
                <div className = 'w-full h-full'>
                    <Image src = '/imgs/Alt.jpg' 
                    alt = '/'
                    layout = 'responsive'
                    width = '215'
                    height = '217'
                    object-fit = 'cover'
                    />
                </div>
                <div className = 'w-full h-full'>
                    <Image src = '/imgs/Alt.jpg' 
                    alt = '/'
                    layout = 'responsive'
                    width = '215'
                    height = '217'
                    object-fit = 'cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default OthersProject;