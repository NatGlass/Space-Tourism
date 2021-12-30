import React from 'react'
import ContentContainer from '../../styles/technology/styled.content-container'
import StyledHeading from '../../styles/technology/styled.heading'
import StyledSubHeading from '../../styles/technology/styled.sub-heading'
import { LaunchImage } from '../../styles/technology/styled.image-container'
import StyledText from '../../styles/technology/styled.tab-text'

export default function Launch() {
    return (
        <>
            <LaunchImage />
            <ContentContainer>
                <StyledSubHeading>THE TERMINOLOGY ...</StyledSubHeading>
                <StyledHeading>LAUNCH VEHICLE</StyledHeading>
                <StyledText>
                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
                </StyledText>
            </ContentContainer>
        </>
    )
}
