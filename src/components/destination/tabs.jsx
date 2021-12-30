import React, { useState } from 'react'

// tab links //
import TabLinkContainer from '../../styles/destination/styled.tab-link-container'
import TabLink from '../../styles/destination/styled.tab-link'
// tab content //
import Moon from './moon-tab'
import Mars from './mars-tab'
import Europa from './europa-tab'
import Titan from './titan-tab'

// tab content styles //
import TabContent from '../../styles/destination/styled.tab-content'


export default function Tabs() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <>
        <TabLinkContainer>
            <TabLink className={toggleState === 1 ? "active-tab" : ""} onClick={() => toggleTab(1)}>
                MOON
            </TabLink>
            <TabLink className={toggleState === 2 ? "active-tab" : ""} onClick={() => toggleTab(2)}>
                MARS
            </TabLink>
            <TabLink className={toggleState === 3 ? "active-tab" : ""} onClick={() => toggleTab(3)}>
                EUROPA
            </TabLink>
            <TabLink className={toggleState === 4 ? "active-tab" : ""} onClick={() => toggleTab(4)}>
                TITAN
            </TabLink>
        </TabLinkContainer>

        <>
            <TabContent className={toggleState === 1 ? "active-content" : ""}>
                <Moon /> 
            </TabContent>
            <TabContent className={toggleState === 2 ? "active-content" : ""}>
                <Mars />
            </TabContent>
            <TabContent className={toggleState === 3 ? "active-content" : ""}>
                <Europa />
            </TabContent>
            <TabContent className={toggleState === 4 ? "active-content" : ""}>
                <Titan />
            </TabContent>
        </>
        
        </>
    )
}
