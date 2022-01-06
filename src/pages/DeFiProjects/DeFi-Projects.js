import React, {useContext, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useModal} from '../../hooks';
import {
    DataContext,
} from 'config';
import appStore from '../../store/app.store';
import {debugLog} from 'utils/helpers';
import Sidebar from "components/Sidebar";
import projectFor from 'assets/images/defi/FORS99.png'
import pASKO from 'assets/images/defi/ASKO.png'
import pMeDIA from 'assets/images/defi/MeDIA eYe NFT Portal.png'
import pMetaverse from 'assets/images/defi/Metaverse Comics.png'
import prASKO from 'assets/images/defi/rASKO.png'
import pQUAI from 'assets/images/defi/QUAI Invest.png'
import Tokenomics from "./components/Tokenomics";
import QuaiKeyMetrics from "pages/DeFiProjects/components/QuaiKeyMetrics";
import FirstSection from "pages/DeFiProjects/components/FirstSection";

const text = (
    <p>MeDIA eYe NFT Portal is an innovative and unique platform, one that will revolutionize the NFT' +
        ' creator market. A frictionless platform for creating, trading, and distributing NFTs.<br/><br/>
        The NFT Creator Portal is designed to support marketers, artists, businesses, and other
        organizations wanting to merchandise, promote, and advertise their products.</p>)
const projects = [
    {
        title: 'QUAI Invest',
        description: text,
        src: pQUAI
    },
    {
        title: 'MeDIA eYe NFT Portal',
        description: text,
        src: pMeDIA
    },
    {
        title: 'Metaverse Comics',
        description: text,
        src: pMetaverse
    },
    {
        title: 'FORS99',
        description: text,
        src: projectFor
    },
    {
        title: 'ASKO',
        description: text,
        src: pASKO
    },
    {
        title: 'rASKO',
        description: text,
        src: prASKO
    }
]
const DeFiProjects = observer(() => {
    const [data] = useContext(DataContext);
    const {isShowing: isStartModalShow, toggle: toggleStartModalShow} =
        useModal();


    useEffect(() => {
        debugLog('DeFiProjects render useEffect');
        debugLog('context data');
    }, [appStore.refresh]);

    return (
        <>
            <div className="layout">
                <div className="content">
                    <div className="page">
                        <div className="defi-page" id="defi-page">
                            <Sidebar pageWrapId="root" outerContainerId="root"/>
                            <FirstSection toggleModal={toggleStartModalShow}/>
                            <Tokenomics/>
                            <QuaiKeyMetrics/>
                            <div className='projects'>
                                <div className="projects__heading">
                                    <div className="projects__heading__title">PROJECTS</div>
                                </div>
                            </div>
                            {projects.map((p, index) => (
                                <div style={{backgroundColor: index % 2 ? '#fff' : ''}} className='project'>
                                    <div className="container">
                                        <div className="projects-list">
                                            <div className="projects-list--item">
                                                <div style={{order: index % 2 && 1}} className='project-item-info'>
                                                    <div className='project-item-title'>{p.title}</div>
                                                    <div className='project-item-describe'>
                                                        {p.description}                                                    </div>
                                                    <div className='project-item-btn'>Explore</div>
                                                </div>
                                                <div className='project-item-photo-outline'>
                                                    <img src={p.src} alt={p.title}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div style={{height: 150}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export default React.memo(DeFiProjects);
