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
        text: 'Create a Money Market',
        buttonText: 'Explore rASKO',
    },
    {
        headerIcon: QUAIheadIcon,
        icon: QUAIbodyIcon,
        text: 'Allocate capital with Intelligent Yield Farming',
        buttonText: 'Explore QUAI Invest',
    },
    {
        headerIcon: mediaHead,
        icon: mediaBody,
        text: 'Launch Airdrop',
        buttonText: 'Explore MeDIA eYe',
    },
]

const ExploreDefiNft = () => (
    <div className='explore-defi-nft'>
        <div className='container'>
            <div className='explore-defi-nft__title'>
                Explore the DeFi NFT Ecosystem
            </div>
            <div className='container__items'>
                {
                    exploreDefiNFTs.map(item => (
                        <div key={item.buttonText}>
                            <div className='container__items--item defi-group'>
                                <div className='defi-group__header'><ReactSVG src={item.headerIcon}
                                                                              wrapper='span'/>
                                </div>
                                <div className='defi-group__body'>
                                    <div className='icon'><ReactSVG src={item.icon} wrapper='span'/></div>
                                    <div className='text'><p>{item.text}</p></div>
                                    <button className='defi-group-button'><p>{item.buttonText}</p></button>
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
