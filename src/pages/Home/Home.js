import React from 'react';
import Banner from './Banner/Banner';
import GymInformation from './GymInformation/GymInformation';
import AboutUs from './AboutUs/AboutUs';
import ChooseUs from './ChooseUs/ChooseUs';
import Programs from './Programs/Programs';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <GymInformation></GymInformation>
            <AboutUs></AboutUs>
            <ChooseUs></ChooseUs>
            <Programs></Programs>
        </div>
    );
};

export default Home;