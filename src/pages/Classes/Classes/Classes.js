import React from 'react';
import PageCover from '../../Shared/PageCover/PageCover';
import useTitle from '../../../hooks/useTitle';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/Loading/Loading';
import Error from '../../../components/Error/Error';
import ClassCard from './ClassCard';

const Classes = () => {
    useTitle('Our Classes');

    const { isLoading, error, data: classes } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <Error error={error.message}></Error>
    }

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