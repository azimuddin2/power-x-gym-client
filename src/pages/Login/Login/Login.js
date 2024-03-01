import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import './Login.css';

const Login = () => {
    useTitle('Login');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
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
                {/* <h1 className='text-center text-3xl font-medium mb-6'>Login</h1> */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block ml-1 mb-2 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                            required
                        />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="password" className="block ml-1 mb-2 text-sm font-medium ">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                            required
                        />
                    </div>
                    <div className='mt-6'>
                        <input
                            className="w-full font-semibold uppercase py-2 text-base text-center rounded-sm bg-secondary text-neutral cursor-pointer"
                            type="submit"
                            value="Login"
                        />
                    </div>
                </form>
                <p className='text-center mt-5 text-secondary'>Don’t have an account? <Link to='/signup' className='text-primary'>Create an account</Link> </p>
            </div>
        </section>
    );
};

export default Login;