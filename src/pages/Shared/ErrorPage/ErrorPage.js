import React from 'react';
import notFound from '../../../assets/Images/not-found.gif';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className='my-10'>
            <img src={notFound} alt="Not found" className='mx-auto' />
            <Link to='/' className='flex justify-center'>
                <button className="text-white bg-primary hover:bg-secondary focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 me-2 flex align-items-center">
                    <FaHome className='text-xl mr-1' />
                    <span>Back to Home</span>
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;