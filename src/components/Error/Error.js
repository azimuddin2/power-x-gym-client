import React from 'react';

const Error = ({error}) => {
    return (
        <div className='py-40'>
            <p className='text-red-500 text-center'>{error}</p>
        </div>
    );
};

export default Error;