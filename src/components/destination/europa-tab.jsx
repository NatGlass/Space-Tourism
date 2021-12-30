import React from 'react'
import ContentContainer from '../../styles/destination/styled.content-container'
import StyledHeading from '../../styles/destination/styled.heading'
import StyledImage from '../../styles/destination/styled.image'
import StyledText from '../../styles/destination/styled.tab-text'
import StyledNotes from '../../styles/destination/styled.notes'
import EuropaImage from '../../assets/destination/image-europa.webp'

export default function Europa() {
    return (
        <>
            <StyledImage src={EuropaImage} />
            <ContentContainer>
                <StyledHeading>EUROPA</StyledHeading>
                <StyledText>
                    The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                </StyledText>
                <StyledNotes>
                    <span>AVG. DISTANCE</span>
                    <h2>628 MIL. KM</h2> 
                    <span>EST. TRAVEL TIME</span>
                    <h2>3 YEARS</h2>
                </StyledNotes>
            </ContentContainer>
        </>
    )
}
