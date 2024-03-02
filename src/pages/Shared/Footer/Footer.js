import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white">
            <div className="mx-auto w-full max-w-screen-lg px-5 lg:px-0 pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 mb-8">
                    <div className="mb-6 md:mb-0">
                        <Link to="/">
                            <p className="text-neutral uppercase text-2xl font-medium font-family">
                                Power <span className='text-primary ml-1'>x-gym</span>
                            </p>
                        </Link>
                        <div className='my-6'>
                            <p className='flex items-center mb-2 text-gray-200'>
                                <FiPhoneCall className='text-lg'></FiPhoneCall>
                                <span className='text-sm ml-2'>+880 18830 61967</span>
                            </p>
                            <p className='flex items-center mb-2 text-gray-200'>
                                <MdOutlineMarkEmailUnread className='text-lg'></MdOutlineMarkEmailUnread>
                                <span className='text-sm ml-2'>mohammadazimuddin274@gmail.com</span>
                            </p>
                            <p className='flex items-center text-gray-200'>
                                <HiOutlineLocationMarker className='text-lg'></HiOutlineLocationMarker>
                                <span className='text-sm ml-2'>Level-4, 34, Awal Centre, Banani, Dhaka</span>
                            </p>
                        </div>
                        <div>
                            <h3 className='text-lg font-family uppercase text-gray-200'>Follow Us</h3>
                            <div className='flex items-center mt-3'>
                                <FaFacebook className='text-2xl mr-3'></FaFacebook>
                                <FaInstagram className='text-2xl mr-3'></FaInstagram>
                                <FaLinkedin className='text-2xl mr-3'></FaLinkedin>
                                <FaTwitter className='text-2xl'></FaTwitter>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-neutral uppercase">Resources</h2>
                            <ul className="text-gray-300 font-normal text-sm">
                                <li className="mb-2">
                                    <a href="/" className="hover:underline">Help Center</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="hover:underline">Email Support</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="hover:underline">Live Chat</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="hover:underline">Gift Certificates</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/" className="hover:underline">Send Us Feedback</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Join Our Newsletter</h2>
                            <p className='text-sm text-gray-300'>A gym is a large room, where people go to do physical exercise and get fit. The gym has exercise bikes running.</p>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-800 sm:mx-auto" />
                <span className="flex justify-center py-5 text-sm text-gray-200">© Power x-gym - 2024</span>
            </div>
            <ScrollToTop
                smooth
                className="animate-bounce flex justify-center items-center"
                color="#171426"
                width="18"
                height="18"
                top="400"
                style={{ background: "#fcd842", boxShadow: 'none', borderRadius: "5px" }}
            />
        </footer>
    );
};

export default Footer;