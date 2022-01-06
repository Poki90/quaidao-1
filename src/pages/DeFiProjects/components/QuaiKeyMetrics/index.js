import React from 'react';
import {ReactSVG} from "react-svg";
import IconMetric from "assets/svg/defi-page/IconMetric.svg";
import IconMetric2 from "assets/svg/defi-page/Icon (1).svg";
import IconMetric3 from "assets/svg/defi-page/Icon (2).svg";

const QuaiKeyMetrics = () => (
    <div className="quai-key-metrics">
        <div className="quai-key-metrics__heading">
            <div className="quai-key-metrics__heading__title">QUAI KEY METRICS</div>
        </div>
        <div className="container">
            <div className="metrics-list">
                <div className="metrics-list__item-outline">
                    <div className="metrics-list__item-outline--metric">
                        <ReactSVG className="metric-logo" src={IconMetric} wrapper='div'/>
                        <div className='metric-info'>
                            <div className='metric-title'>
                                Current projects
                            </div>
                            <div className='metric-counts'>
                                6
                            </div>
                        </div>
                    </div>
                    <div className="back-square"/>
                </div>
                <div className="metrics-list__item-outline">
                    <div className="metrics-list__item-outline--metric">
                        <ReactSVG className="metric-logo" src={IconMetric2} wrapper='div'/>
                        <div className='metric-info'>
                            <div className='metric-title'>
                                Staking Rate APY
                            </div>
                            <div className='metric-counts'>
                                <span>up to</span> 480%
                            </div>
                        </div>
                    </div>
                    <div className="back-square"/>
                </div>
                <div className="metrics-list__item-outline">
                    <div className="metrics-list__item-outline--metric">
                        <ReactSVG className="metric-logo" src={IconMetric3} wrapper='div'/>
                        <div className='metric-info'>
                            <div className='metric-title'>
                                Total QUAI Staked
                            </div>
                            <div className='metric-counts'>
                                8,453,190
                            </div>
                        </div>
                    </div>
                    <div className="back-square"/>
                </div>
            </div>

        </div>
    </div>

);

export default QuaiKeyMetrics;
