import React from 'react';
import progressionBgImg from '../../../assets/Images/progression-bg.jpg';
import workoutBgImg from '../../../assets/Images/workout-bg.jpg';
import nutritionBgImg from '../../../assets/Images/nutrition-bg.jpg';
import progressionIcon from '../../../assets/Icons/progression.png';
import workoutIcon from '../../../assets/Icons/workout.png';
import nutritionIcon from '../../../assets/Icons/nutrition.png';
import InfoCard from './InfoCard';

const GymInformation = () => {

    const information = [
        {
            id: 1,
            image: progressionBgImg,
            icon: progressionIcon,
            title: 'Progression',
            description: 'A gym is a large room, where people go to do physical exercise and get fit.',
            color: 'text-neutral',
        },
        {
            id: 2,
            image: workoutBgImg,
            icon: workoutIcon,
            title: 'Workout',
            description: 'A gym is a large room, where people go to do physical exercise and get fit.',
            color: 'text-primary',
        },
        {
            id: 3,
            image: nutritionBgImg,
            icon: nutritionIcon,
            title: 'Nutrition',
            description: 'A gym is a large room, where people go to do physical exercise and get fit.',
            color: 'text-neutral',
        },
    ];

    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 my-10 lg:my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    information.map(info => <InfoCard
                        key={info.id}
                        info={info}
                    ></InfoCard>)
                }
            </div>
        </section>
    );
};

export default GymInformation;