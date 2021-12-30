import React from 'react'
import ContentContainer from '../../styles/crew/styled.content-container'
import { VictorStyledImage } from '../../styles/crew/styled.image'
import StyledLine from '../../styles/crew/styled.line'
import StyledName from '../../styles/crew/styled.name'
import StyledJob from '../../styles/crew/styled.job'
import StyledText from '../../styles/crew/styled.tab-text'
import VictorImage from '../../assets/crew/image-victor-glover.webp'


export default function Victor() {
    return (
        <>
            <VictorStyledImage src={VictorImage} />
            <StyledLine />
            <ContentContainer>
                <StyledJob>PILOT</StyledJob>
                <StyledName>VICTOR GLOVER</StyledName>
                <StyledText>
                Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.        
                </StyledText>
            </ContentContainer>
        </>
    )
}
