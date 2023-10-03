import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PageCover from '../../Shared/PageCover/PageCover';
import { BsFillCheckSquareFill } from 'react-icons/bs';

const ClassesDetails = () => {
    const classesDetails = useLoaderData();
    const { name, image, description, information, classSchedule } = classesDetails;

    return (
        <section>
            <PageCover title={name}></PageCover>
            <div className='max-w-screen-lg lg:mx-auto mx-5 my-12 lg:my-20'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div>
                        <img src={image} alt="" className='w-full' />
                        <p className='mt-6 text-base text-gray-500'>{description}</p>
                        <ul className='mt-10'>
                            {
                                information.map((info, index) => <li className='flex items-center mb-4'
                                    key={index}
                                    info={info}
                                >
                                    <BsFillCheckSquareFill className='text-primary text-xl mr-3'></BsFillCheckSquareFill>
                                    <span className='text-secondary font-semibold capitalize'>{info}</span>
                                </li>)
                            }
                        </ul>
                    </div>

                    <div>
                        <h1 className='text-primary text-4xl uppercase font-medium font-family'>Class <span className='text-secondary'>Schedule</span></h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-8'>
                            {
                                classSchedule.map(schedule => <div className='p-5 shadow-lg rounded-sm'
                                    schedule={schedule}
                                >
                                    <h2 className='text-secondary text-xl font-bold'>{schedule.day}</h2>
                                    <p className='text-primary font-medium'>{schedule.time}</p>
                                </div>)
                            }
                        </div>
                        <div className='flex justify-end mt-6 lg:mt-72'>
                            <Link to='/pricing'
                                className="bg-primary text-secondary mt-8 font-semibold uppercase inline-flex justify-center items-center py-2 px-8 text-base text-center rounded-sm hover:bg-secondary hover:text-neutral font-family">
                                Pricing
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassesDetails;