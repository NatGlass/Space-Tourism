import React, { useState } from 'react'

// tab links //
import TabLinkContainer from '../../styles/technology/styled.tab-link-container'
import TabLink from '../../styles/technology/styled.tab-link'
// tab content //
import Launch from './launch-tab'
import SpacePort from './spaceport-tab'
import SpaceCapsule from './space-capsule-tab'

// tab content styles //
import TabContent from '../../styles/technology/styled.tab-content'


export default function Tabs() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <>
        <TabLinkContainer>
            <TabLink className={toggleState === 1 ? "active-tab" : ""} onClick={() => toggleTab(1)}>
                1
            </TabLink>
            <TabLink className={toggleState === 2 ? "active-tab" : ""} onClick={() => toggleTab(2)}>
                2
            </TabLink>
            <TabLink className={toggleState === 3 ? "active-tab" : ""} onClick={() => toggleTab(3)}>
                3
            </TabLink>
        </TabLinkContainer>

        <>
            <TabContent className={toggleState === 1 ? "active-content" : ""}>
                <Launch />
            </TabContent>
            <TabContent className={toggleState === 2 ? "active-content" : ""}>
                <SpacePort />
            </TabContent>
            <TabContent className={toggleState === 3 ? "active-content" : ""}>
                <SpaceCapsule />
            </TabContent>
            </>
            
        </>
    )
}
