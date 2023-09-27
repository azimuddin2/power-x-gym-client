import React from 'react';
import Banner from './Banner/Banner';
import GymInformation from './GymInformation/GymInformation';
import AboutUs from './AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GymInformation></GymInformation>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;