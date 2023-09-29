import React from 'react';
import aboutUsImg from '../../../assets/Images/about-us.jpg';
import { Link } from 'react-router-dom';
import VideoModal from './VideoModal';

const AboutUs = () => {

    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 my-12 lg:my-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20'>
                <div
                    style={{
                        backgroundImage: `url(${aboutUsImg})`,
                        backgroundSize: 'cover',
                    }}
                    className=' bg-gray-600 bg-blend-multiply'>
                    <div className='py-52 lg:py-64 flex justify-center items-center'>
                        <VideoModal></VideoModal>
                    </div>
                </div>
                <div className='lg:mt-20'>
                    <h1 style={{ color: '#f4f4f5' }} className='text-4xl uppercase font-family font-medium'>About Us</h1>
                    <h2 className='mt-3 text-primary text-3xl uppercase font-family font-medium'>We are hero to Dream!</h2>
                    <h2 className='mt-2 text-secondary text-2xl lg:text-3xl uppercase font-family font-medium'>Our team is here service you.</h2>
                    <p className='mt-4 text-secondary text-sm leading-6 w-4/5'>A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines. While some guests play golf, others work out in the hotel gym.</p>
                    <Link to='/'
                        className="bg-primary text-secondary mt-8 font-semibold uppercase inline-flex justify-center items-center py-2 px-8 text-base text-center rounded-sm hover:bg-yellow-200 font-family">
                        Program Join
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;