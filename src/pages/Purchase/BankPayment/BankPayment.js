import React from 'react';
import visaCard from '../../../assets/Images/credit-cards_visa.png';
import masterCard from '../../../assets/Images/credit-cards_mastercard.png';
import amexCard from '../../../assets/Images/credit-cards_amex.png';
import paypal from '../../../assets/Images/paypal.png';
import { CiCircleQuestion, CiCreditCard2 } from "react-icons/ci";

const BankPayment = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className='my-20'>
            <div className='border lg:p-12 p-6'>
                <div className='flex justify-between align-items-center'>
                    <div className="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-secondary bg-gray-100 border-gray-300 focus:ring-secondary dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Credit Card</label>
                    </div>
                    <div className='flex align-items-center'>
                        <img src={visaCard} alt="visa card" className='h-8'/>
                        <img src={masterCard} alt="master card" className='mx-3 h-8' />
                        <img src={amexCard} alt="amex card" className='h-8'/>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="mt-5">
                    <div>
                        <label htmlFor="card-number-input" className="block ml-1 mb-2 text-sm">Card Number</label>
                        <div className="relative">
                            <input
                                type="text"
                                id="card-number-input"
                                className="border border-gray-300 text-gray-900 rounded-sm w-full p-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                placeholder="4242 4242 4242 4242"
                                pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                                required
                            />
                            <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                <CiCreditCard2 className='text-xl' />
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-5 my-5">
                        <div>
                            <label htmlFor="email" className="block ml-1 mb-2 text-sm">Name on Card</label>
                            <input
                                type="email"
                                name="email"
                                placeholder='Enter type here'
                                className="border border-gray-300 text-gray-900 rounded-sm w-full p-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                                required
                            />
                        </div>
                        <div className='grid grid-cols-2 gap-5'>
                            <div>
                                <label htmlFor="email" className="block ml-1 mb-2 text-sm">Expiry Date</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='MM / YY'
                                    className="border border-gray-300 text-gray-900 rounded-sm w-full p-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block ml-1 mb-2 text-sm">CVV Code</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="card-number-input"
                                        className="border border-gray-300 text-gray-900 rounded-sm w-full p-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                        required
                                    />
                                    <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                        <CiCircleQuestion className='text-xl' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-secondary hover:bg-blue-800 focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 me-2"
                    >
                        Pay Now
                    </button>
                </form>
            </div>
            <div className='flex justify-between align-items-center border mt-5 lg:p-12 p-6'>
                <div className="flex items-center mb-4">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-secondary bg-gray-100 border-gray-300 focus:ring-secondary dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">PayPal</label>
                </div>
                <div className='flex align-items-center'>
                    <img src={paypal} alt="paypal" className='h-8' />
                </div>
            </div>
        </section>
    );
};

export default BankPayment;