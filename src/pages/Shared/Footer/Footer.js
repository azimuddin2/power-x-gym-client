import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer class="bg-secondary text-white">
            <div class="mx-auto w-full max-w-screen-lg px-5 lg:px-0 py-12">
                <div class="md:flex md:justify-between">

                    <div class="mb-6 md:mb-0">
                        <Link to="/">
                            <p className="text-secondary lg:text-neutral uppercase text-2xl font-medium font-family">
                                Power <span className='text-primary ml-1'>x-gym</span>
                            </p>
                        </Link>
                        <div className='my-6'>
                            <p className='flex items-center mb-2'>
                                <FiPhoneCall className='text-lg'></FiPhoneCall>
                                <span className='text-sm ml-2'>+880 18830 61967</span>
                            </p>
                            <p className='flex items-center mb-2'>
                                <MdOutlineMarkEmailUnread className='text-lg'></MdOutlineMarkEmailUnread>
                                <span className='text-sm ml-2'>mohammadazimuddin274@gmail.com</span>
                            </p>
                            <p className='flex items-center'>
                                <HiOutlineLocationMarker className='text-lg'></HiOutlineLocationMarker>
                                <span className='text-sm ml-2'>Level-4, 34, Awal Centre, Banani, Dhaka</span>
                            </p>
                        </div>
                        <div>
                            <h3 className='text-lg font-family uppercase'>Follow Us</h3>
                            <div className='flex items-center mt-3'>
                                <FaFacebook className='text-2xl mr-3'></FaFacebook>
                                <FaInstagram className='text-2xl mr-3'></FaInstagram>
                                <FaLinkedin className='text-2xl mr-3'></FaLinkedin>
                                <FaTwitter className='text-2xl'></FaTwitter>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-neutral uppercase">Resources</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold uppercase text-white">Follow us</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="/" class="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="/" class="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="p-0">Copy right</span>
            </div>
        </footer>
    );
};

export default Footer;