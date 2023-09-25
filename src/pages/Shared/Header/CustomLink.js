import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            className='block py-2 pl-3 pr-4 text-secondary lg:text-neutral rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 lg:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
            style={{
                color: match ? '#fcd842' : '',
                fontWeight: match ? '600' : '500',
                borderBottom: match ? '2px solid #fcd842' : 'none',
                borderRadius: '0',
                marginRight: '4px'
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;