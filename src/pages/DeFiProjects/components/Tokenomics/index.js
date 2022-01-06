import React from 'react';
const tokenomics = [
    {
        text: '5% For IDO On Binance Smartchain',
        count: '5,000,000 QUAI',
        color: '#E2E6FF',
        idx: 1
    },
    {
        text: '15% Of Supply - Staking Pools ERC20 & BEP20 QUAI',
        count: '15,000,000 QUAI',
        color: '#5570FF',
        idx: 2
    },
    {
        text: '10% Of Supply - QUAI On BSC',
        count: '10,000,000 QUAI',
        color: '#A5B3FF',
        idx: 3
    },
    {
        text: '10% Of Supply - Marketing And Community Rewards',
        count: '10,000,000 QUAI',
        color: '#C8D1FF',
        idx: 4
    },
    {
        text: '20% Of Supply - Development QUAI DAO And Investments',
        count: '20,000,000 QUAI',
        color: '#0024E5',
        idx: 5
    },
    {
        text: '10% Of Supply - For Farming And Liquidity Mining QUAI Allocations',
        count: '10,000,000 QUAI',
        color: '#657DFF',
        idx: 6
    },
    {
        text: '10% Supply - Future Staking Rewards',
        count: '10,000,000 QUAI',
        color: '#8B9DFF',
        idx: 7
    },
    {
        text: '20% Of Supply - QUAI Collective',
        count: '20,000,000 QUAI',
        color: '#3050FF',
        idx: 8
    },
]

const Tokenomics = () => (
    <div className="tokenomics">
        <div className="tokenomics__heading">
            <div className="tokenomics__heading__title">TOKENOMICS</div>
            <div className="tokenomics__heading__description">TOTAL
                SUPPLY: <span>100 000 000</span></div>
        </div>
        <div className="container">
            <div className="token-list">
                {tokenomics
                    .filter(token => token.idx < 5)
                    .map(t => (
                        <div className="token-list-item-right">
                            <div className="token-list-item-info">
                                <div className="token-list-item-info-title">
                                    {t.text}
                                </div>
                                <div className="token-list-item-info-price">
                                    {t.count}
                                </div>
                            </div>
                            <div className="token-list-item-icon"
                                 style={{backgroundColor: t.color}}>
                                <div className="colored-shadow"></div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="center-image"/>
            <div className="token-list">
                {tokenomics
                    .filter(token => token.idx > 4)
                    .map(t => (
                        <div className="token-list-item-left">
                            <div className="token-list-item-info">
                                <div className="token-list-item-info-title">
                                    {t.text}
                                </div>
                                <div className="token-list-item-info-price">
                                    {t.count}
                                </div>
                            </div>
                            <div className="token-list-item-icon"
                                 style={{backgroundColor: t.color}}>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
);

export default Tokenomics;
