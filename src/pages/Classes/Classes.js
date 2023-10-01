import React from 'react';
import PageCover from '../Shared/PageCover/PageCover';
import psychoTraining from '../../assets/Images/psycho-training.png';
import selfDefense from '../../assets/Images/self-defense.png';
import advanceGym from '../../assets/Images/advance-gym.jpg';
import cardioTraining from '../../assets/Images/cardio-training.png';
import strengthTraining from '../../assets/Images/strength-training.jpg';
import crunchFitness from '../../assets/Images/crunch-fitness.png';
import ClassCard from './ClassCard';

const Classes = () => {

    const classes = [
        {
            id: 1,
            image: selfDefense,
            name: 'Self defense',
        },
        {
            id: 2,
            image: cardioTraining,
            name: 'Cardio training',
        },
        {
            id: 3,
            image: advanceGym,
            name: 'Advance gym',
        },
        {
            id: 4,
            image: psychoTraining,
            name: 'Psycho training',
        },
        {
            id: 5,
            image: strengthTraining,
            name: 'Strength training',
        },
        {
            id: 6,
            image: crunchFitness,
            name: 'Crunch Fitness',
        },
    ];

    return (
        <section>
            <PageCover title={'Our Classes'}></PageCover>
            <div className='max-w-screen-lg lg:mx-auto mx-5 my-12 lg:my-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        classes.map(classCard => <ClassCard
                            key={classCard.id}
                            classCard={classCard}
                        ></ClassCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Classes;