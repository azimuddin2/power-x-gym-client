import React from 'react';
import bannerBgImg from '../../../assets/Images/banner-bg.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${bannerBgImg})`,
                backgroundSize: 'cover',
            }}
            className="w-full bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-28 lg:py-48">
                <h1 className="font-family mb-4 text-3xl font-normal uppercase tracking-tight leading-none text-white md:text-5xl lg:text-5xl">The best fitness studio in town</h1>
                <p className=" lg:w-2/4 mx-auto mb-8 text-sm font-normal text-gray-300">A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines. While some guests play golf, others work out in the hotel gym.</p>
                <Link to='/'
                    className="bg-primary text-secondary font-semibold uppercase inline-flex justify-center items-center py-2 px-8 text-base text-center rounded-sm hover:bg-yellow-200 font-family">
                    Join Us
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </section>
    );
};

export default Banner;