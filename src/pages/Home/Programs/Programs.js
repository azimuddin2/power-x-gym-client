import React from 'react';
import femaleTrainingImg from '../../../assets/Images/female-training.png';
import maleTrainingImg from '../../../assets/Images/male-training.jpg';
import { Link } from 'react-router-dom';
import './Programs.css';

const Programs = () => {
    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 my-12 lg:my-20'>
            <h1 className='lg:text-4xl text-3xl text-center font-family uppercase font-medium text-secondary'>Training <span className='text-primary'>Programs</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10'>
                <div className='relative'>
                    <img src={femaleTrainingImg} alt="" className='program-image' />
                    <Link to='/classes'
                        className="absolute bottom-8 lg:bottom-12 bg-primary text-secondary mt-8 font-semibold uppercase inline-flex justify-center items-center py-4 px-12 text-lg text-center rounded-none hover:bg-yellow-200 font-family">
                        Female training session
                        <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>

                <div className='relative'>
                    <img src={maleTrainingImg} alt="" className='program-image' />
                    <Link to='/classes'
                        className="absolute bottom-8 lg:bottom-12 bg-primary text-secondary mt-8 font-semibold uppercase inline-flex justify-center items-center py-4 px-12 text-lg text-center rounded-none hover:bg-yellow-200 font-family">
                        Male training session
                        <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Programs;