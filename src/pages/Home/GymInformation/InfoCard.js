import React from 'react';

const InfoCard = ({ info }) => {
    const { image, icon, title, description, color } = info;

    return (
        <div className="w-full h-full bg-gray-500 bg-blend-multiply pt-20 pb-12"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '100%',
                height: '100%'
            }}
        >
            <img src={icon} alt="" className='mx-auto h-12' />
            <div className=' text-neutral text-center px-10 mt-5'>
                <h2 className={`${color} text-3xl uppercase font-family`}>{title}</h2>
                <p className='text-sm mt-2 text-gray-200'>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;