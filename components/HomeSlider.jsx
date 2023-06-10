import Image from 'next/image';
import React, { useState } from 'react';
import { HomeSliderData } from './HomeSliderData'; 
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';

const HomeSlider = ({slides}) => {
    const  [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div id='project' className = 'max-w-[1240px] mx-auto'>
            <h1 className = 'text-3xl font-bold text-center p4'>Projects</h1>
            <div className = 'relative flex justify-center p-4'>
                {HomeSliderData.map((slide, index) => {
                    return (
                        // Showing only the current active image
                        <div key={index} className = {
                            index === current ? 
                            'opacity-[1] ease-in duration-100' : 
                            'opacity-0'}
                        >

                            {/* Button for the image slider */}
                            <FaArrowLeft onClick={prevSlide} 
                            className = 'absolute top-[50%] left-[30px] text-white/60 cursor-pointer select-none z-[2]' size={50} />
                            {index === current && (
                                <Image 
                                src={slide.image} 
                                alt='/'
                                width='1440'
                                height='600'
                                object-fit='cover'
                                />
                            )}

                            {/* Right button for the image slider */}
                            <FaArrowRight onClick={nextSlide} 
                            className = 'absolute top-[50%] right-[30px] text-white/60 cursor-pointer select-none z-[2]' size={50} />
                        </div>
                            
                    );
                })}
            </div>
        </div>
    )
}

export default HomeSlider;