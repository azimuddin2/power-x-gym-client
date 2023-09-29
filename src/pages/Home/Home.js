import React from 'react';
import Banner from './Banner/Banner';
import GymInformation from './GymInformation/GymInformation';
import AboutUs from './AboutUs/AboutUs';
import ChooseUs from './ChooseUs/ChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GymInformation></GymInformation>
            <AboutUs></AboutUs>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;