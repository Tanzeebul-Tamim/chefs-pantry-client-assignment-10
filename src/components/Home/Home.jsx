import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Banner from '../Banner/Banner';
import ChefSection from '../ChefSection/ChefSection';
import HeadLines from '../HeadLines/HeadLines';
import HealthTips from '../HealthTips/HealthTips';
import TipsAndTricks from '../TipsAndTricks/TipsAndTricks';

const Home = () => {
    const data = useLoaderData();
    useTitle("")
    return (
        <div>
            <Banner bannerDishes={data.bannerDishes}></Banner>
            <HeadLines headlines={data.headlines}></HeadLines>
            <ChefSection chefsSection={data.chefsSection}></ChefSection>
            <TipsAndTricks tips={data.tipsAndTricks}></TipsAndTricks>
            <HealthTips healthTips={data.healthTips}></HealthTips>
        </div>
    );
};

export default Home;