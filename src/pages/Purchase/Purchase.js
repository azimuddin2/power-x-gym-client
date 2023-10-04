import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PageCover from '../Shared/PageCover/PageCover';
import { Button, Step, Stepper, Typography } from '@material-tailwind/react';
import './Purchase.css';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import BankPayment from './BankPayment/BankPayment';
import MembershipCreated from './MembershipCreated/MembershipCreated';

const Purchase = () => {
    const purchase = useLoaderData();

    const [activeStep, setActiveStep] = useState(0);
    const [isFirstStep, setIsFirstStep] = useState(false);
    const [isLastStep, setIsLastStep] = useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);


    const renderContent = () => {
        switch (activeStep) {
            case 0:
                return (
                    <PersonalDetails></PersonalDetails>
                );
            case 1:
                return (
                    <BankPayment></BankPayment>
                );
            case 2:
                return (
                    <MembershipCreated></MembershipCreated>
                );
            default:
                return null;
        }
    };

    
    return (
        <section>
            <PageCover title={purchase.name}></PageCover>
            <div className='max-w-screen-lg lg:mx-auto mx-5 my-12 lg:my-20'>
                <div className="w-full">

                    <div className=' lg:w-3/5 mx-auto '>
                        <Stepper
                            activeStep={activeStep}
                            isLastStep={(value) => setIsLastStep(value)}
                            isFirstStep={(value) => setIsFirstStep(value)}
                        >
                            <Step onClick={() => setActiveStep(0)}>
                                <span className='flex justify-center items-center'>1</span>
                                <div className="absolute -bottom-10 w-max text-center">
                                    <Typography
                                        variant="h6"
                                        color={activeStep === 0 ? "blue-gray" : "gray"}
                                    >
                                        Personal Details
                                    </Typography>
                                </div>
                            </Step>

                            <Step onClick={() => setActiveStep(1)}>
                                <span className='flex justify-center items-center'>2</span>
                                <div className="absolute -bottom-10 w-max text-center">
                                    <Typography
                                        variant="h6"
                                        color={activeStep === 1 ? "blue-gray" : "gray"}
                                    >
                                        Bank Payment
                                    </Typography>
                                </div>
                            </Step>

                            <Step onClick={() => setActiveStep(2)}>
                                <span className='flex justify-center items-center'>3</span>
                                <div className="absolute -bottom-10 w-max text-center">
                                    <Typography
                                        variant="h6"
                                        color={activeStep === 2 ? "blue-gray" : "gray"}
                                    >
                                        Membership Created
                                    </Typography>
                                </div>
                            </Step>

                        </Stepper>
                    </div>

                    {renderContent()}

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