import React from 'react'
import imgAlt from '../public/imgs/Alt.jpg'
import py1 from '../public/imgs/python/tictactoe-preview.jpg'
import fe1 from '../public/imgs/frontend/qrcode-preview.jpg'
import fe2 from '../public/imgs/frontend/productreview-preview.jpg'
import HomeOtherData from './HomeOtherData';

const HomeOtherContent = () => {
    return (
        <div className = 'max-w-[1240px] mx-auto text-center py-24'>
            <h1 className = 'text-3xl font-bold text-center p4'>Other Projects</h1>
            <div className = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
                <HomeOtherData thumbImg={fe1} message= 'QR Code' />
                <HomeOtherData thumbImg={fe2} message= 'Product Preview Card' />
                <HomeOtherData thumbImg={py1} message= 'TicTacToe with Pygame' />
                <HomeOtherData thumbImg={imgAlt} message= 'Project 2' />
                <HomeOtherData thumbImg={imgAlt} message= 'Project 3' />
                <HomeOtherData thumbImg={imgAlt} message= 'Project 4' />
            </div>
        </div>
    );
};

export default HomeOtherContent;