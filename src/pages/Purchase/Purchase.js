import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PageCover from '../Shared/PageCover/PageCover';
import { Button, Step, Stepper, Typography } from '@material-tailwind/react';

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
                <div className="w-full py-4 px-8">
                    <Stepper
                        activeStep={activeStep}
                        isLastStep={(value) => setIsLastStep(value)}
                        isFirstStep={(value) => setIsFirstStep(value)}
                    >
                        <Step onClick={() => setActiveStep(0)}>
                            <span className='flex justify-center items-center'>1</span>
                        </Step>
                        <Step onClick={() => setActiveStep(1)}>
                            <span className='flex justify-center items-center'>2</span>
                        </Step>
                        <Step onClick={() => setActiveStep(2)}>
                            <span className='flex justify-center items-center'>3</span>
                        </Step>
                    </Stepper>

                    <div className="mt-20 flex justify-between">
                        <Button
                            className='bg-primary text-secondary font-bold'
                            onClick={handlePrev}
                            disabled={isFirstStep}
                        >
                            Prev
                        </Button>
                        <Button
                            className='bg-primary text-secondary font-bold'
                            onClick={handleNext}
                            disabled={isLastStep}
                        >
                            Next
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Purchase;