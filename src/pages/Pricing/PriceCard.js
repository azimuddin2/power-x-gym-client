import React from 'react';
import { Link } from 'react-router-dom';

const PriceCard = ({ priceInfo }) => {
    const { bgImg, title, name, price, planing } = priceInfo;

    return (
        <div className="w-full h-full bg-gray-500 bg-blend-multiply py-10"
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '100%',
                height: '100%'
            }}
        >
            <div className='text-center'>
                <h3 className='text-primary'>{title}</h3>
                <h2 className='text-neutral'>{name}</h2>
                <h1 className='text-primary'>${price}</h1>
            </div>
            <ul>
                {
                    planing.map((plan, index) => <li className='text-neutral'
                        key={index}
                        plan={plan}
                    >{plan}</li>)
                }
            </ul>
            <Link to='/classes'
                className="bg-primary text-secondary mt-8 font-semibold uppercase inline-flex justify-center items-center py-2 px-8 text-base text-center rounded-sm hover:bg-yellow-200 font-family">
                Purchase
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>
    );
};

export default PriceCard;