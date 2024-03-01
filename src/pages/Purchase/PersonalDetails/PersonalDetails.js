import React, { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineDateRange } from 'react-icons/md';
import './PersonalDetails.css';

const PersonalDetails = () => {
    const [selectDate, setSelectDate] = useState(new Date());
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const gender = form.gender.value;
        const address = form.address.value;
        const country = form.country.value;
        const city = form.city.value;
        const postcode = form.postcode.value;

        const personalInfo = {
            firstName,
            lastName,
            email,
            phone,
            date,
            gender,
            address,
            country,
            city,
            postcode
        };
        console.log(personalInfo)
        form.reset();
    };

    return (
        <div className='my-20'>
            <form onSubmit={handleSubmit} className='border lg:p-12'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div>
                        <label htmlFor="first_name" className="block ml-1 mb-2 text-sm font-medium ">First Name</label>
                        <input
                            type="text"
                            name='firstName'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block ml-1 mb-2 text-sm font-medium ">Last Name</label>
                        <input
                            type="text"
                            name='lastName'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block ml-1 mb-2 text-sm font-medium ">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="mobile_number" className="block ml-1 mb-2 text-sm font-medium ">Mobile Number</label>
                        <input
                            type="text"
                            name='phone'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                            required
                        />
                    </div>
                    <div className='relative'>
                        <label htmlFor="date_birth" className="block ml-1 mb-2 text-sm font-medium ">Date of Birth</label>
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
                    <div>
                        <label htmlFor="gender" className="block ml-1 mb-2 text-sm font-medium ">Gender</label>
                        <select
                            name='gender'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="address" className="block ml-1 mb-2 text-sm font-medium ">Address</label>
                        <input
                            type="text"
                            name='address'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="country" className="block ml-1 mb-2 text-sm font-medium ">Country/Region</label>
                        <select
                            name='country'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                        >
                            {
                                countries.map(country => <option
                                    key={country.ccn3}
                                    country={country}
                                >{country.name.common}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="city" className="block ml-1 mb-2 text-sm font-medium ">City</label>
                        <input
                            type="text"
                            name='city'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="postcode" className="block ml-1 mb-2 text-sm font-medium ">Postcode</label>
                        <input
                            type="text"
                            name='postcode'
                            className="border border-gray-300 text-gray-900 rounded-sm w-full p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                            required
                        />
                    </div>
                </div>
                <div className=' flex justify-end mt-10'>
                    <input
                        className="w-1/2 font-semibold uppercase inline-flex justify-center items-center py-3 text-base text-center rounded-sm bg-secondary text-neutral cursor-pointer"
                        type="submit"
                        value="Submit"
                    />
                </div>
            </form >
        </div >
    );
};

export default PersonalDetails;