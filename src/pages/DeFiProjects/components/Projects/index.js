import React, {useEffect, useRef} from 'react';
import pQUAI from "assets/images/defi/QUAI Invest.png";
import pMeDIA from "assets/images/defi/MeDIA eYe NFT Portal.png";
import pMetaverse from "assets/images/defi/Metaverse Comics.png";
import projectFor from "assets/images/defi/FORS99.png";
import pASKO from "assets/images/defi/ASKO.png";
import prASKO from "assets/images/defi/rASKO.png";
import {useMedia} from "hooks";

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

const Projects = () => {
    const isTablet = useMedia('(min-width: 600px) and (max-width: 1200px)');
    const isDesktop = useMedia('(max-width: 1200px)');
    useEffect(() => {
        console.log(refImg?.current?.offsetWidth);
    })
    const refImg = useRef(null);
    return (
        <>
            <div className='projects'>
                <div className="projects__heading">
                    <div className="projects__heading__title">PROJECTS</div>
                </div>
            </div>
            <div className='projects-container'>
                {projects.map((p, index) => (
                    <div
                        key={p.title}
                        style={{backgroundColor: (isTablet && index === 2 || index === 3) ? '#fff' : (!isTablet && index % 2) ? '#fff' : ""}}
                        className='project'>
                        <div className="container">
                            <div className="projects-list">
                                <div className="projects-list--item">
                                    <div style={{order: !isTablet && index % 2 ? 1 : 0}} className='project-item-info'>
                                        <div className='project-item-title'>{p.title}</div>
                                        <div className='project-item-describe'>
                                            {p.description}                                                    </div>
                                        <button className='project-item-btn'><p>Explore</p></button>
                                    </div>
                                    <div
                                        ref={refImg}
                                        style={{
                                            order: !isTablet && index % 2 ? 0 : 0,
                                            height: index === 5 && refImg?.current?.offsetWidth < 600 && 214 || index === 5 && refImg?.current?.offsetWidth > 600 && 450,
                                            maxWidth: refImg?.current?.offsetWidth < 600 && 345

                                        }}
                                        className='project-item-photo-outline'>
                                        <img
                                            src={p.src} alt={p.title}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{height: !isTablet ? 150 : 50, backgroundColor: isDesktop && "#F4F7FD"}}/>
        </>
    );
}

export default Projects;
