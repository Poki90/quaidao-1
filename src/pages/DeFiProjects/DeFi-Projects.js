import React, {useContext, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useMobileDetect} from '../../hooks';
import {
  DataContext,
} from 'config';
import appStore from '../../store/app.store';
import {debugLog} from 'utils/helpers';
import Sidebar from "components/Sidebar";
import RenderResponsiveBlocks from "components/RenderResponsiveBlocks";
import Header from "components/layouts/Header";
import UiButton from "components/UiButton";

const DeFiProjects = observer(() => {
  const [data] = useContext(DataContext);
  const {isDesktop} = useMobileDetect();

  useEffect(() => {
    debugLog('DeFiProjects render useEffect');
    debugLog('context data');
  }, [appStore.refresh]);

  return (
      <>
        <div className="layout">
          <div className="content">
            <div className="page">
              <div className="home" id="home">
                <Sidebar pageWrapId="root" outerContainerId="root"/>
                <div className="top-section">
                  <RenderResponsiveBlocks
                      leftChildren={<div className="top-section__left-part">
                        <Header/>
                        <div className="info-section">
                          <div className="we-are">
                            <p className="primary">QUAI DAO</p>
                            <p className="secondary"> <span style={{fontWeight:400}}>DEFI</span> <span style={{fontWeight:700}}>ACCELERATOR</span></p>
                          </div>
                          <div className='we-are-description'>
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
                        </div>
                      </div>}
                      rightChildren={
                        <div className="top-section__right-part">
                          <div className="top-section__right-part__heading-button">
                            <UiButton priority='primary' type='button'><p>Stacking</p>
                            </UiButton>

                          </div>
                          <div style={{height: 400, display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                          </div>
                        </div>
                      }/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
});

export default React.memo(DeFiProjects);
