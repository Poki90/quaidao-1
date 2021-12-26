import React from 'react';
import {ReactSVG} from "react-svg";
import projectssectionIcon from "assets/svg/home/projectssectionIcon.svg";

const projectsSection = [
    {
        icon: projectssectionIcon,
        text: 'MeDIA eYe NFT Portal',
        textSecondary: 'The NFT Creator Portal is designed to support marketers, artists, businesses, and other organizations wanting to merchandise, promote, and advertise their products.',
        buttonText: 'Explore',
    },
    {
        icon: projectssectionIcon,
        text: 'MeDIA eYe NFT Portal',
        textSecondary: 'The NFT Creator Portal is designed to support marketers, artists, businesses, and other organizations wanting to merchandise, promote, and advertise their products.',
        buttonText: 'Explore',
    },
    {
        icon: projectssectionIcon,
        text: 'MeDIA eYe NFT Portal',
        textSecondary: 'The NFT Creator Portal is designed to support marketers, artists, businesses, and other organizations wanting to merchandise, promote, and advertise their products.',
        buttonText: 'Explore',
    },
]


const ProjectsSection = () => (
    <div className='projects-section'>
        <div className='container'>
            <div className='projects-section__title'>
                PROJECTS
            </div>
            <div className='container__items' style={{zIndex: 1}}>
                {
                    projectsSection.map(item => (
                        <div key={item.buttonText} style={{zIndex: 1, position: 'relative'}}>
                            <div className='container__items--item projects-group' style={{zIndex: 1}}>
                                <div className='border-outline' style={{zIndex: 1}}/>
                                <div className='projects-group__body'>
                                    <div className='icon'><ReactSVG src={item.icon} wrapper='span'/></div>
                                    <div className='text'><p>{item.text}</p></div>
                                    <div className='secondary'><p>{item.textSecondary}</p></div>
                                    <button className='projects-group-button'><p>{item.buttonText}</p></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
);

export default ProjectsSection;
