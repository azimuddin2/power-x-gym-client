import React from 'react';
import visaCard from '../../../assets/Images/credit-cards_visa.png';
import masterCard from '../../../assets/Images/credit-cards_mastercard.png';
import amexCard from '../../../assets/Images/credit-cards_amex.png';
import paypal from '../../../assets/Images/paypal.png';

const BankPayment = () => {
    return (
        <section className='my-20'>

            <div className='border lg:p-12'>

                <div className='flex justify-between align-items-center'>
                    <div className="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Credit Card</label>
                    </div>
                    <div className='flex align-items-center'>
                        <img src={visaCard} alt="visa card" />
                        <img src={masterCard} alt="master card" className='mx-3' />
                        <img src={amexCard} alt="amex card" />
                    </div>
                </div>


                <form className="my-10">
                    <label for="card-number-input" className="sr-only">Card number:</label>
                    <div className="relative">
                        <input type="text" id="card-number-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="4242 4242 4242 4242" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required />
                        <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                            <svg fill="none" className="h-6 text-[#1434CB] dark:text-white" viewBox="0 0 36 21"><path fill="currentColor" d="M23.315 4.773c-2.542 0-4.813 1.3-4.813 3.705 0 2.756 4.028 2.947 4.028 4.332 0 .583-.676 1.105-1.832 1.105-1.64 0-2.866-.73-2.866-.73l-.524 2.426s1.412.616 3.286.616c2.78 0 4.966-1.365 4.966-3.81 0-2.913-4.045-3.097-4.045-4.383 0-.457.555-.957 1.708-.957 1.3 0 2.36.53 2.36.53l.514-2.343s-1.154-.491-2.782-.491zM.062 4.95L0 5.303s1.07.193 2.032.579c1.24.442 1.329.7 1.537 1.499l2.276 8.664h3.05l4.7-11.095h-3.043l-3.02 7.543L6.3 6.1c-.113-.732-.686-1.15-1.386-1.15H.062zm14.757 0l-2.387 11.095h2.902l2.38-11.096h-2.895zm16.187 0c-.7 0-1.07.37-1.342 1.016L25.41 16.045h3.044l.589-1.68h3.708l.358 1.68h2.685L33.453 4.95h-2.447zm.396 2.997l.902 4.164h-2.417l1.515-4.164z" /></svg>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="email" className="block ml-1 mb-2 text-sm">Name on Card</label>
                            <input
                                type="email"
                                name="email"
                                placeholder='Enter your email'
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
                                    placeholder='Enter your email'
                                    className="border border-gray-300 text-gray-900 rounded-sm w-full p-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block ml-1 mb-2 text-sm">CVV Code</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Enter your email'
                                    className="border border-gray-300 text-gray-900 rounded-sm w-full p-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                                    required
                                />
                            </div>
                        </div>
                    </div>


                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Pay now</button>
                </form>

            </div>

            <div className='flex justify-between align-items-center border lg:p-12 mt-5'>
                <div className="flex items-center mb-4">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">PayPal</label>
                </div>
                <div className='flex align-items-center'>
                    <img src={paypal} alt="paypal" className='h-8'/>
                </div>
            </div>

        </section>
    );
};

export default BankPayment;