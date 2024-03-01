import React, { useContext } from 'react';
import useTitle from '../../../hooks/useTitle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';

const SignUp = () => {
    useTitle('SignUp');
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUpdateUserProfile(name);
                form.reset();
                toast.success('User signup successfully.');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error(error.message);
            })
    };

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name,
        };
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
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
                    <div className='mb-3'>
                        <label htmlFor="name" className="block ml-1 mb-2 text-sm font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter your name'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className="block ml-1 mb-2 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email'
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