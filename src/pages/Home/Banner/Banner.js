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
            class="w-full bg-gray-700 bg-blend-multiply">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <div>
                    <h1 class="font-family mb-4 text-4xl font-normal uppercase tracking-tight leading-none text-white md:text-5xl lg:text-5xl">The best fitness studio in town</h1>
                    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                    <Link to='/'
                        class="bg-primary text-secondary font-semibold uppercase inline-flex justify-center items-center py-3 px-6 text-base text-center rounded-sm hover:bg-yellow-200 font-family">
                        Join Us
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
                <div>
                    <h1>Video</h1>
                </div>
            </div>
        </section>
    );
};

export default Banner;