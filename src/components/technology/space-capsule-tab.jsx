import React from 'react'
import ContentContainer from '../../styles/technology/styled.content-container'
import StyledHeading from '../../styles/technology/styled.heading'
import StyledSubHeading from '../../styles/technology/styled.sub-heading'
import { SpaceCapsuleImage } from '../../styles/technology/styled.image-container'
import StyledText from '../../styles/technology/styled.tab-text'

export default function SpaceCapsule() {
    return (
        <>
            <SpaceCapsuleImage />
            <ContentContainer>
                <StyledSubHeading>THE TERMINOLOGY ...</StyledSubHeading>
                <StyledHeading>SPACE CAPSULE</StyledHeading>
                <StyledText>
                    A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
                </StyledText>
            </ContentContainer>
        </>
    )
}
