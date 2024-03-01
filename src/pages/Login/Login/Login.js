import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='my-28'>


            <div>
                <Link to="/">
                    <p className="text-secondary uppercase text-2xl font-medium text-center font-family">
                        Power <span className='text-primary ml-1'>x-gym</span>
                    </p>
                </Link>



                <form className=' w-2/5 mx-auto'>

                    <div>
                        <label htmlFor="first_name" className="block ml-1 mb-2 text-sm font-medium ">First Name</label>
                        <input
                            type="text"
                            name='firstName'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block ml-1 mb-2 text-sm font-medium ">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                            required
                        />
                    </div>

                    <div className=' flex justify-end mt-10'>
                        <input
                            className=" w-full font-semibold uppercase py-2 text-base text-center rounded-sm bg-secondary text-neutral cursor-pointer"
                            type="submit"
                            value="Submit"
                        />
                    </div>

                </form >


            </div>



        </section>
    );
};

export default Login;