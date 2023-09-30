import React from 'react';
import pageCoverImg from '../../../assets/Images/banner-bg.jpg';

const PageCover = ({ title }) => {
    return (
        <section
            style={{
                backgroundImage: `url(${pageCoverImg})`,
                backgroundSize: 'cover',
            }}
            className="w-full bg-gray-700 bg-blend-multiply">
            <div className="px-5 mx-auto max-w-screen-xl text-center py-28 lg:py-48">
                <h1 className="font-family mb-4 text-4xl leading-10 font-normal uppercase tracking-tight lg:leading-none text-white md:text-5xl lg:text-5xl">{title}</h1>
            </div>
        </section>
    );
};

export default PageCover;