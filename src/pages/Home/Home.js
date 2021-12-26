import React from 'react';
import Sidebar from '../../components/Sidebar';

import TopSection from "pages/Home/components/TopSection";
import SecondSection from "pages/Home/components/SecondSection";
import ExploreDefiNft from "pages/Home/components/ExploreDefiNft";
import GatewayDeFi from "pages/Home/components/GatewayDeFi";
import ProjectsSection from "pages/Home/components/ProjectsSection/ProjectsSection";
import QuaiFarm from "pages/Home/components/QuaiFarm";
import RoadMap from "pages/Home/components/RoadMap";
import TeamSection from "pages/Home/components/TeamSection";
import PartnersSection from "pages/Home/components/PartnersSection";
import LastSection from "pages/Home/components/LastSection";

const Home = () => (
    <div className="home" id="home">
        <Sidebar pageWrapId="root" outerContainerId="root"/>
        <TopSection/>
        <SecondSection/>
        <ExploreDefiNft/>
        <GatewayDeFi/>
        <ProjectsSection/>
        <QuaiFarm/>
        <RoadMap/>
        <TeamSection/>
        <PartnersSection/>
        <LastSection/>
    </div>
);

export default Home;










