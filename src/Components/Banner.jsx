import React from 'react';

const Banner = ({img, title, subtitle}) => {
    return (
        <div className='py-32  px-60 bg-cover bg-center  w-full' style={{ backgroundImage: `url(${img})` }}>
            <div className='bg-black bg-opacity-55 py-20 text-white px-28 '>
                <h1 className='text-4xl font-semibold text-center'>{title}</h1>
                <p className='text-sm mt-2 text-center'>{subtitle}</p>
            </div>
        </div>
    );
};

export default Banner;