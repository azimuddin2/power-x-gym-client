import React from 'react';
import PageCover from '../Shared/PageCover/PageCover';
import useTitle from '../../hooks/useTitle';
import PriceCard from './PriceCard';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Pricing = () => {
    useTitle('Pricing');

    const { isLoading, error, data: pricing } = useQuery({
        queryKey: ['pricing'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/pricing');
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