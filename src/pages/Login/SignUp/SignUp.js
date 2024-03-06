import React from 'react';
import useTitle from '../../../hooks/useTitle';
import { Link } from 'react-router-dom';

const SignUp = () => {
    useTitle('SignUp');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const possword = form.password.value;
    };

    return (
        <section className='my-28'>
            <Link to="/">
                <p className="mb-6 text-secondary uppercase text-2xl font-medium text-center font-family">
                    Power <span className='text-primary ml-1'>x-gym</span>
                </p>
            </Link>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name" className="block ml-1 mb-2 text-sm font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter Your Name'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className="block ml-1 mb-2 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter Your Email'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block ml-1 mb-2 text-sm font-medium ">Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder='Password'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                            required
                        />
                    </div>
                    <div className='mt-6'>
                        <input
                            className="w-full font-semibold uppercase py-2 text-base text-center rounded-sm bg-secondary text-neutral cursor-pointer"
                            type="submit"
                            value="SignUp"
                        />
                    </div>
                </form>
                <p className='text-center mt-5 text-secondary'>Already have an account? <Link to='/login' className='text-primary'>Login</Link> </p>
            </div>
        </section>
    );
};

export default SignUp;