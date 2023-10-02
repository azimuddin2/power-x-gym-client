import React from 'react';
import PageCover from '../Shared/PageCover/PageCover';
import useTitle from '../../hooks/useTitle';
import advanceBgImg from '../../assets/Images/progression-bg.jpg';
import beginnerBgImg from '../../assets/Images/beginner-bg.jpg';
import basicBgImg from '../../assets/Images/nutrition-bg.jpg';
import PriceCard from './PriceCard';

const Pricing = () => {
    useTitle('Pricing');

    const pricing = [
        {
            _id: 1,
            bgImg: advanceBgImg,
            title: 'Billed Monthly',
            name: 'Advance Plan',
            price: 140,
            planing: [
                'Mobile Optimized',
                'Best Hosting',
                'Free Custom',
                'Outstanding',
                'Happy Customers'
            ]
        },
        {
            _id: 2,
            bgImg: beginnerBgImg,
            title: 'Billed Monthly',
            name: 'Beginner Plan',
            price: 120,
            planing: [
                'Mobile Optimized',
                'Best Hosting',
                'Free Custom',
                'Outstanding',
                'Happy Customers'
            ]
        },
        {
            _id: 3,
            bgImg: basicBgImg,
            title: 'Billed Monthly',
            name: 'Basic Plan',
            price: 100,
            planing: [
                'Mobile Optimized',
                'Best Hosting',
                'Free Custom',
                'Outstanding',
                'Happy Customers'
            ]
        },
    ];

    return (
        <section>
            <PageCover title={'Pricing Plans'}></PageCover>
            <div className='max-w-screen-lg lg:mx-auto mx-5 my-12 lg:my-20'>
                <div>
                    <h1 className='text-primary text-center font-medium uppercase text-4xl font-family'>Choose the offer <span className='text-secondary'>That suits you</span></h1>
                    <p className=" lg:w-2/4 mx-auto mb-8 text-sm font-normal text-gray-500 text-center mt-4">A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. others work out in the hotel gym.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        pricing.map(priceInfo => <PriceCard
                            key={priceInfo._id}
                            priceInfo={priceInfo}
                        ></PriceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Pricing;