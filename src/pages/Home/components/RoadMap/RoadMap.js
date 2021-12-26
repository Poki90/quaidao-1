import React from 'react';
import {ReactSVG} from "react-svg";
import fireDotIcon from "assets/svg/home/fire-dot.svg";

const roadMapList = [
    {ul: ['QUAI IDO offering', 'Listing on Uniswap and Pancake', 'Listing on Dex Trade']},
    {ul: ['Quai Interchange, BTC on-ramp for DeFi markets', 'Quai invest mainnet development and testing', 'Development of MeDIA eYe NFT Creator Portal']},
    {ul: ['Development and launch of QUAI DAO', 'Launch of MeDIA eYe NFT Creator Portal']},
    {ul: ['Development and launch of QUAI DAO']},
]

const RoadMap = () => (
    <div className='road-map'>
        <p className='road-map__title'>ROАD MАP</p>
        <div className='container'>
            <div className='container__list'>
                {roadMapList.map((item, index) => {
                    return (
                        <div className='container__list--item'>
                            <div className='li-title'>
                                <p>Q{index + 1}</p>
                            </div>
                            <div>
                                {item.ul.map(li => <div className='li'><ReactSVG src={fireDotIcon}
                                                                                 wrapper='span'/> {li}</div>)}
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    </div>

);

export default RoadMap;
