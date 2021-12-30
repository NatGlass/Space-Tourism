import React from 'react'
import ContentContainer from '../../styles/crew/styled.content-container'
import { MarkStyledImage } from '../../styles/crew/styled.image'
import StyledLine from '../../styles/crew/styled.line'
import StyledName from '../../styles/crew/styled.name'
import StyledJob from '../../styles/crew/styled.job'
import StyledText from '../../styles/crew/styled.tab-text'
import MarkImage from '../../assets/crew/image-mark-shuttleworth.webp'

export default function Mark() {
    return (
        <>
            <MarkStyledImage src={MarkImage} />
            <StyledLine />
            <ContentContainer>
                <StyledJob>MISSION SPECIALIST</StyledJob>
                <StyledName>MARK SHUTTLEWORTH</StyledName>
                <StyledText>
                    Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
                </StyledText>
            </ContentContainer>
        </>
    )
}
