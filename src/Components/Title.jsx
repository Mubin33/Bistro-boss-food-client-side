import React from 'react';

const Title = ({title, subtitle}) => {
    return (
        <div className='flex py-10 justify-center'>
            <div  className=''>
            <p className='text-center text-[#D99904]'>{subtitle}</p>
            <h1 className='text-center px-6 py-3 text-2xl rounded-sm mt-3 border-y-4 border-y-gray-300'>{title}</h1>
            </div>
        </div>
    );
};

export default Title;