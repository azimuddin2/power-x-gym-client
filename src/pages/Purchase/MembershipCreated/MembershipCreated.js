import React, { useContext } from 'react';
import successGif from '../../../assets/Images/successfully.gif';
import { AuthContext } from '../../../providers/AuthProvider';

const MembershipCreated = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='my-20'>
            <img src={successGif} alt="success gif" className='w-full lg:w-60 mx-auto' />
            <h2 className='text-center text-secondary text-4xl font-family'>Congratulation!</h2>
            <p className='text-center text-lg mt-3'><span className='text-primary'>{user?.displayName}</span> Power X-Gym Member</p>
        </div>
    );
};

export default MembershipCreated;