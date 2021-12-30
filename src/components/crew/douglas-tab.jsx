import React from 'react'
import ContentContainer from '../../styles/crew/styled.content-container'
import { DouglasStyledImage } from '../../styles/crew/styled.image'
import StyledLine from '../../styles/crew/styled.line'
import StyledName from '../../styles/crew/styled.name'
import StyledJob from '../../styles/crew/styled.job'
import StyledText from '../../styles/crew/styled.tab-text'
import DouglasImage from '../../assets/crew/image-douglas-hurley.webp'


export default function Douglas() {
    return (
        <>
            <DouglasStyledImage src={DouglasImage} />
            <StyledLine />
            <ContentContainer>
                <StyledJob>COMMANDER</StyledJob>
                <StyledName>DOUGLAS HURLEY</StyledName>
                <StyledText>
                    Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
                </StyledText>
            </ContentContainer>
        </>
    )
}
