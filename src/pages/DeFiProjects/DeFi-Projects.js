import React, {useContext, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useModal} from '../../hooks';
import {
    DataContext,
} from 'config';
import appStore from '../../store/app.store';
import {debugLog} from 'utils/helpers';
import Sidebar from "components/Sidebar";
import Tokenomics from "./components/Tokenomics";
import QuaiKeyMetrics from "pages/DeFiProjects/components/QuaiKeyMetrics";
import FirstSection from "pages/DeFiProjects/components/FirstSection";
import Projects from "pages/DeFiProjects/components/Projects";

const DeFiProjects = observer(() => {
    const [data] = useContext(DataContext);
    const {isShowing: isStartModalShow, toggle: toggleStartModalShow} =
        useModal();


    useEffect(() => {
        debugLog('DeFiProjects render useEffect');
        debugLog('context data');
    }, [appStore.refresh]);

    return (
        <>
            <div className="layout">
                <div className="content">
                    <div className="page">
                        <div className="defi-page" id="defi-page">
                            <Sidebar pageWrapId="root" outerContainerId="root"/>
                            <FirstSection toggleModal={toggleStartModalShow}/>
                            <Tokenomics/>
                            <QuaiKeyMetrics/>
                            <Projects/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export default React.memo(DeFiProjects);
