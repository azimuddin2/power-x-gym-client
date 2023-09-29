import React from 'react';
import fitnessIcon from '../../../assets/Icons/fitness.png';
import strengthIcon from '../../../assets/Icons/strength.png';
import giftIcon from '../../../assets/Icons/gift.png';
import Choose from './Choose';

const ChooseUs = () => {

    const chooseUs = [
        {
            id: 1,
            icon: fitnessIcon,
            title: 'Free fitness training',
            description: 'A gym is a large room, where people go to do physical exercise and get fit. The gym has exercise bikes and running.',
            border: 'none',
        },
        {
            id: 2,
            icon: strengthIcon,
            title: 'Tons of cardio & strength',
            description: 'A gym is a large room, where people go to do physical exercise and get fit. The gym has exercise bikes and running.',
            border: '2px solid #fcd842',
        },
        {
            id: 3,
            icon: giftIcon,
            title: 'No Commitment membership',
            description: 'A gym is a large room, where people go to do physical exercise and get fit. The gym has exercise bikes and running.',
            border: 'none',
        },
    ];

    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 mb-20'>
            <h1 className='lg:text-4xl text-3xl text-center font-family uppercase font-medium text-primary'>Why <span className='text-secondary'>Choose Us</span></h1>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    chooseUs.map(choose => <Choose
                        key={choose.id}
                        choose={choose}
                    ></Choose>)
                }
            </div>
        </section>
    );
};

export default ChooseUs;