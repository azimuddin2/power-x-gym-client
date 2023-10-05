import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineDateRange } from 'react-icons/md';
import './PersonalDetails.css';

const PersonalDetails = () => {
    const [selectDate, setSelectDate] = useState(new Date());

    return (
        <div className='my-20'>
            <form className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium ">First Name</label>
                    <input
                        type="text"
                        name='firstName'
                        className="border border-gray-300 text-gray-900 rounded-sm w-full p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                        required
                    />
                </div>

                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium ">Last Name</label>
                    <input
                        type="text"
                        name='lastName'
                        className="border border-gray-300 text-gray-900 rounded-sm w-full p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium ">Email</label>
                    <input
                        type="email"
                        name='email'
                        className="border border-gray-300 text-gray-900 rounded-sm w-full p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                        required
                    />
                </div>

                <div>
                    <label htmlFor="mobile_number" className="block mb-2 text-sm font-medium ">Mobile Number</label>
                    <input
                        type="text"
                        name='phone'
                        className="border border-gray-300 text-gray-900 rounded-sm w-full p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                        required
                    />
                </div>

                <div className='relative'>
                    <label htmlFor="date_birth" className="block mb-2 text-sm font-medium ">Date of Birth</label>
                    <ReactDatePicker
                        name='date'
                        className="border border-gray-300 text-gray-900 rounded-sm w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                        showIcon
                        selected={selectDate}
                        onChange={(date) => setSelectDate(date)}
                        dateFormat='Pp'
                    ></ReactDatePicker>
                    <MdOutlineDateRange className='text-xl mr-2 absolute right-2 top-10'></MdOutlineDateRange>
                </div>

            </form>
        </div>
    );
};

export default PersonalDetails;