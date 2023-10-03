import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PageCover from '../Shared/PageCover/PageCover';

const Purchase = () => {
    const purchase = useLoaderData();

    const [activeStep, setActiveStep] = useState(0);
    const [isFirstStep, setIsFirstStep] = useState(false);
    const [isLastStep, setIsLastStep] = useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    return (
        <section>
            <PageCover title={purchase.name}></PageCover>
            <div className='max-w-screen-lg lg:mx-auto mx-5 my-12 lg:my-20'>

            </div>
        </section>
    );
};

export default Purchase;