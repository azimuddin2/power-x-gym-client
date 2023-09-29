import React from 'react';

const Choose = ({ choose }) => {
    const { icon, title, description, border } = choose;

    return (
        <div style={{ border: `${border}` }} className='pt-14 pb-10 shadow-xl'>
            <img src={icon} alt={title} className='mx-auto h-20' />
            <div className='text-center mt-8 px-8'>
                <h2 className='text-xl font-family uppercase text-secondary font-medium mb-3'>{title}</h2>
                <p className='text-sm text-secondary'>{description}</p>
            </div>
        </div>
    );
};

export default Choose;