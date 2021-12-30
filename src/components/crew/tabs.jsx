import React, { useState } from 'react'

// tab links //
import TabLinkContainer from '../../styles/crew/styled.tab-link-container'
import TabLink from '../../styles/crew/styled.tab-link'

// tab content // 
import Douglas from '../../components/crew/douglas-tab'
import Mark from '../../components/crew/mark-tab'
import Victor from '../../components/crew/victor-tab'
import Anousheh from '../../components/crew/anousheh-tab'

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
                
            </TabLink>
            <TabLink className={toggleState === 2 ? "active-tab" : ""} onClick={() => toggleTab(2)}>
                 
            </TabLink>
            <TabLink className={toggleState === 3 ? "active-tab" : ""} onClick={() => toggleTab(3)}>
                
            </TabLink>
            <TabLink className={toggleState === 4 ? "active-tab" : ""} onClick={() => toggleTab(4)}>
                
            </TabLink>
        </TabLinkContainer>

        <>
            <TabContent className={toggleState === 1 ? "active-content" : ""}>
                <Douglas />
            </TabContent>
            <TabContent className={toggleState === 2 ? "active-content" : ""}>
                <Mark />
            </TabContent>
            <TabContent className={toggleState === 3 ? "active-content" : ""}>
                <Victor />
            </TabContent>
            <TabContent className={toggleState === 4 ? "active-content" : ""}>
                <Anousheh />
            </TabContent>
        </>
        
        </>
    )
}
