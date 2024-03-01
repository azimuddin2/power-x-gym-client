import React from 'react';
import successGif from '../../../assets/Images/successfully.gif';

const MembershipCreated = () => {
    return (
        <div className='my-20'>
            <img src={successGif} alt="success gif" className='lg:w-60 mx-auto'/>
            <h2 className='text-center text-secondary text-4xl font-family'>Congratulation!</h2>
            <p className='text-center text-lg mt-3'>Power X-Gym Member</p>
        </div>
    );
};

export default MembershipCreated;