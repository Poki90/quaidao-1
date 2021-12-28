import React from 'react';
import RenderResponsiveBlocks from "components/RenderResponsiveBlocks";
import Header from "components/layouts/Header";
import UiButton from "components/UiButton";
import {useMobileDetect} from "hooks";
import topImage from 'assets/images/Ellipse 1.png'
const TopSection = ({openModal}) => {
    const {isDesktop} = useMobileDetect();

    return (
        <div className="top-section">
            <RenderResponsiveBlocks
                leftChildren={<div className="top-section__left-part">
                    <Header/>
                    {!isDesktop && <div className="staking-button" style={{zIndex: 0}}>
                        <UiButton priority='white' type='button' onclick={openModal}><p>Cohort farming</p>
                        </UiButton>
                    </div>}
                    <div className="info-section">
                        <div className="we-are">
                            <p className="primary">QUAI DAO</p>
                            <p className="secondary"><span style={{fontWeight: 400}}>DEFI</span> <span
                                style={{fontWeight: 700}}>ACCELERATOR</span></p>
                        </div>
                        {
                            isDesktop && <div className='we-are-description'>
                                <div>
                                    <p className='primary'>Current projects</p>
                                    <p className='secondary'><span className='number'>6</span></p>
                                </div>
                                <div>
                                    <p className='primary'>Staking Rate APYs</p>
                                    <p className='secondary'>up to <span className='number'>480%</span></p>
                                </div>
                                <div>
                                    <p className='primary'>Total QUAI Staked</p>
                                    <p className='secondary'><span className='number'>8,453,190</span></p>
                                </div>
                            </div>
                        }
                    </div>
                </div>}
                rightChildren={
                    <div className="top-section__right-part">
                        <img className='top-eclipse' src={topImage} alt='top logo'/>
                        <div className="top-section__right-part__heading-button">
                            {isDesktop && <UiButton priority='primary' type='button' onclick={openModal}><p>Cohort farming</p>
                            </UiButton>}

                        </div>
                        <div style={{height: 400, display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                        </div>
                    </div>
                }/>
        </div>
    );
}

export default TopSection;
