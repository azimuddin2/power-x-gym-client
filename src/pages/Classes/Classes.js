import React, { useEffect, useState } from 'react';
import PageCover from '../Shared/PageCover/PageCover';
import ClassCard from './ClassCard';
import useTitle from '../../hooks/useTitle';

const Classes = () => {
    useTitle('Our Classes');
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data));
    }, [])

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