import React from 'react';
import Slider from '../Components/Slider';
import SwiperBanner from '../Components/SwiperBanner';
import PopularItem from '../Components/PopularItem';
import LetestSection from '../Components/LetestSection';
import Testimonials from '../Components/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Bistro Boss</title>
            </Helmet>
            <Slider/>
            <SwiperBanner/>
            <PopularItem/>
            <LetestSection/>
            <Testimonials/>
        </div>
    );
};

export default Home;