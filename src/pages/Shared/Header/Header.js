import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                toast.error(error.message);
            })
    };

    return (
        <div className='fixed lg:absolute z-10 w-full'>
            <Navbar className='lg:bg-opacity-0 max-w-screen-lg lg:mx-auto px-4 lg:px-0'>
                <Link to="/">
                    <p className="text-secondary lg:text-neutral uppercase text-2xl font-medium font-family">
                        Power <span className='text-primary ml-1'>x-gym</span>
                    </p>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className='lg:bg-opacity-0 font-medium p-4 md:p-0 mt-4 mb-2 lg:mb-0 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                    <li><CustomLink to='/'>Home</CustomLink></li>
                    <li><CustomLink to='/services'>Services</CustomLink></li>
                    <li><CustomLink to='/classes'>Our Classes</CustomLink></li>
                    <li><CustomLink to='/pricing'>Pricing</CustomLink></li>
                    <li>
                        {
                            user?.uid ?
                                (
                                    <button
                                        onClick={handleLogOut}
                                        className='w-full text-left py-2 pl-3 pr-4 text-secondary lg:text-neutral rounded  hover:bg-gray-200 md:hover:bg-transparent md:border-0 lg:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                    >
                                        SignOut
                                    </button>
                                )
                                :
                                (
                                    <CustomLink to='/login'>Login</CustomLink>
                                )
                        }
                    </li>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;