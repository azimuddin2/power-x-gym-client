import React from 'react';

const PersonalDetails = () => {
    return (
        <div className='my-20'>
            <form>
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>

                    <input
                        type="text"
                        id="first_name"
                        class="border border-gray-300 text-gray-900 rounded-sm w-full p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary "
                        required
                    />

                </div>
            </form>
        </div>
    );
};

export default PersonalDetails;