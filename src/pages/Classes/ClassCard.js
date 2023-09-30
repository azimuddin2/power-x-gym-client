import React from 'react';
import { Link } from 'react-router-dom';

const ClassCard = ({ classCard }) => {
    const { image, name } = classCard;

    return (
        <div className='relative mb-10'>
            <img src={image} alt={name} className=' h-full w-full' />
            <div className='flex justify-center px-10'>
                <Link to='/'
                    className=" w-11/12 absolute -bottom-7 bg-primary text-secondary mt-8 font-semibold uppercase inline-flex justify-center items-center py-4 text-lg text-center rounded-none hover:bg-yellow-200 font-family">
                    {name}
                    <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default ClassCard;