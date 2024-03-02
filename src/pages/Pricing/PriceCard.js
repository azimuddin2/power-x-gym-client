import React from 'react';
import { Link } from 'react-router-dom';
import { BsCheck2Circle } from 'react-icons/bs';

const PriceCard = ({ priceInfo }) => {
    const { _id, image, title, name, price, planing } = priceInfo;

    return (
        <div className="w-full h-full bg-gray-600 bg-blend-multiply py-9"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '100%',
                height: '100%'
            }}
        >
            <div className='text-center'>
                <h3 className='text-primary text-lg uppercase font-family mb-1'>{title}</h3>
                <h2 className='text-neutral text-3xl uppercase font-family mb-4'>{name}</h2>
                <h1 className='text-primary text-5xl uppercase font-medium font-family'>${price}</h1>
            </div>
            <ul className='px-10 mt-6'>
                {
                    planing.map((plan, index) => <li className='text-neutral flex items-center mb-2'
                        key={index}
                        plan={plan}
                    ><BsCheck2Circle className='mr-2 text-primary'></BsCheck2Circle> {plan}</li>)
                }
            </ul>
            <div className='w-1/2 mx-auto'>
                <Link to={`/purchase/${_id}`}
                    className="bg-primary text-secondary mt-8 font-semibold uppercase inline-flex justify-center items-center py-2 px-8 text-base text-center rounded-sm hover:bg-yellow-200 font-family">
                    Purchase
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default PriceCard;