import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import './Login.css';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    useTitle('Login');
    const { signIn } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                toast.error(error.message);
            })
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
                    <div>
                        <label htmlFor="email" className="block ml-1 mb-2 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter Your Email'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                            required
                        />
                    </div>
                    <div className='mt-3'>
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