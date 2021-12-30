import React from 'react'
import ContentContainer from '../../styles/technology/styled.content-container'
import StyledHeading from '../../styles/technology/styled.heading'
import StyledSubHeading from '../../styles/technology/styled.sub-heading'
import { SpacePortImage } from '../../styles/technology/styled.image-container'
import StyledText from '../../styles/technology/styled.tab-text'

export default function SpacePort() {
    return (
        <>
            <SpacePortImage />
            <ContentContainer>
                <StyledSubHeading>THE TERMINOLOGY ...</StyledSubHeading>
                <StyledHeading>SPACEPORT</StyledHeading>
                <StyledText>
                    A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
                </StyledText>
            </ContentContainer>
        </>
    )
}
