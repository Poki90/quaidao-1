import React from 'react';
import {ReactSVG} from "react-svg";

import raskoHeadIcon from "assets/svg/home/raskoHeadIcon.svg";
import raskoBodyIcon from "assets/svg/home/raskoBodyIcon.svg";
import QUAIheadIcon from "assets/svg/home/QUAIheadIcon.svg";
import QUAIbodyIcon from "assets/svg/home/QUAIbodyIcon.svg";
import mediaHead from "assets/svg/home/mediaHead.svg";
import mediaBody from "assets/svg/home/mediaBody.svg";

const exploreDefiNFTs = [
    {
        headerIcon: raskoHeadIcon,
        icon: raskoBodyIcon,
        text: 'Create Borrow and Lend Money Market for Crypto Assets',
        buttonText: 'Explore rASKO',
    },
    {
        headerIcon: QUAIheadIcon,
        icon: QUAIbodyIcon,
        text: 'Allocate capital with Intelligent and Automated Yield Farming',
        buttonText: 'Explore QUAI Invest',
    },
    {
        headerIcon: mediaHead,
        icon: mediaBody,
        text: 'Create NFTs and Launch Custom Airdrops',
        buttonText: 'Explore MeDIA eYe',
    },
]

const ExploreDefiNft = () => (
    <div className='explore-defi-nft' data-aos="fade-left"
         data-aos-anchor="#example-anchor"
         data-aos-offset="500"
         data-aos-duration="500">
        <div className='container'>
            <div className='explore-defi-nft__title'>
                Explore the DeFi NFT Ecosystem
            </div>
            <div className='container__items'>
                {
                    exploreDefiNFTs.map((item, index) => (
                        <div key={index}>
                            <div className='defi-group'>
                                <div className='defi-group__header'><ReactSVG src={item.headerIcon}
                                                                              wrapper='span'/>
                                </div>
                                <div className='defi-group__body'>
                                    <div className='icon'><ReactSVG src={item.icon} wrapper='span'/></div>
                                    <div className='text'><p>{item.text}</p></div>
                                    <button className='defi-group-button'><p>{item.buttonText}</p></button>
                                    <span className="down-elem"/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>

);

export default ExploreDefiNft;
