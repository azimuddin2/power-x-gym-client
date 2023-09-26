import React from 'react';

const InfoCard = ({ info }) => {
    const { image, icon, title, description } = info;

    return (
        <div className="w-full h-full bg-gray-500 bg-blend-multiply pt-20 pb-10"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
               backgroundPosition: '100%'
            }}
        >
            <img src={icon} alt="" className='mx-auto'/>
            <div className=' text-neutral text-center'>
                <h2 className='text-primary text-3xl uppercase font-family'>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;