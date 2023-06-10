import React from 'react'
import img1 from '../public/imgs/shrine2.jpg';
import img2 from '../public/imgs/kyoto1.jpg';
import img3 from '../public/imgs/kyoto2.jpg';
import img4 from '../public/imgs/kyoto3.jpg';
import img5 from '../public/imgs/kyoto4.jpg';
import img6 from '../public/imgs/kyoto5.jpg';
import HomeOtherData from './HomeOtherData';

const HomeOtherContent = () => {
    return (
        <div className = 'max-w-[1240px] mx-auto text-center py-24'>
            <h1 className = 'text-3xl font-bold text-center p4'>Other Projects</h1>
            <div className = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
                <HomeOtherData thumbImg={img1} message= 'Project 1' />
                <HomeOtherData thumbImg={img2} message= 'Project 2' />
                <HomeOtherData thumbImg={img3} message= 'Project 3' />
                <HomeOtherData thumbImg={img4} message= 'Project 4' />
                <HomeOtherData thumbImg={img5} message= 'Project 5' />
                <HomeOtherData thumbImg={img6} message= 'Project 6' />
            </div>
        </div>
    );
};

export default HomeOtherContent;