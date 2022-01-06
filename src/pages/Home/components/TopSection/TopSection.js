import React from 'react';
import RenderResponsiveBlocks from "components/RenderResponsiveBlocks";
import Header from "components/layouts/Header";
import UiButton from "components/UiButton";
import {useMedia} from "hooks";
import topImage from 'assets/images/main-top-section-image.png'
import topImageMobile from 'assets/images/main-figure-mob.png'
const TopSection = ({openModal}) => {
    const isDesktop = useMedia('(max-width: 699px)');


    return (
        <div className="top-section">
            <RenderResponsiveBlocks
                leftChildren={<div className="top-section__left-part">
                    <Header/>
                    {isDesktop && <div className="staking-button" style={{zIndex: 0,paddingTop:40}}>
                        <UiButton priority='white' type='button' onclick={openModal}><p>Cohort farming</p>
                        </UiButton>
                    </div>}
                    <div className="info-section">
                        <div className="we-are">
                            <p className="primary">QUAI DAO</p>
                            <p className="secondary"><span style={{fontWeight: 400}}>DEFI</span> <span className='ACCELERATOR'
                                style={{fontWeight: 700}}>ACCELERATOR</span></p>
                        </div>
                        {
                            !isDesktop && <div className='we-are-description'>
                                <div>
                                    <p className='primary'>Current projects</p>
                                    <p className='secondary'><span className='number'>6</span></p>
                                </div>
                                <div>
                                    <p className='primary'>Staking Rate APY</p>
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
                        <div className='top-eclipse'>
                            {!isDesktop && <img src={topImage} alt='top logo'/>}
                            <a href="https://google.com" target="_blank" className="one"/>
                            <a href="https://google.com" target="_blank" className="two"/>
                            <a href="https://google.com" target="_blank" className="three"/>
                            <a href="https://google.com" target="_blank" className="four"/>
                        </div>
                        <div className="top-section__right-part__heading-button">
                            {!isDesktop &&
                            <UiButton priority='primary' type='button' onclick={openModal}><p>Cohort farming</p>
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
