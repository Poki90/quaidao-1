import React, {useEffect, useState} from 'react';
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
import {useMobileDetect, useModal} from "hooks";
import StartModal from "pages/Home/components/StartModal";

const Home = () => {
    const {isShowing: isStartModalShow, toggle: toggleStartModalShow} =
        useModal();

    return (
        <div className="home" id="home">
            <StartModal
                isShowing={isStartModalShow}
                toggle={toggleStartModalShow}/>
            <Sidebar
                openModal={toggleStartModalShow}
                pageWrapId="root" outerContainerId="root"/>
            <TopSection
                openModal={toggleStartModalShow}/>
            <SecondSection
                openModal={toggleStartModalShow}/>
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
}

export default Home;










