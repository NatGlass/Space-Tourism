import React from 'react'
import ContentContainer from '../../styles/destination/styled.content-container'
import StyledHeading from '../../styles/destination/styled.heading'
import StyledImage from '../../styles/destination/styled.image'
import StyledText from '../../styles/destination/styled.tab-text'
import StyledNotes from '../../styles/destination/styled.notes'
import TitanImage from '../../assets/destination/image-titan.webp'

export default function Titan() {
    return (
        <>
            <StyledImage src={TitanImage} />
            <ContentContainer>
                <StyledHeading>TITAN</StyledHeading>
                <StyledText>
                    The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
                </StyledText>
                <StyledNotes>
                    <span>AVG. DISTANCE</span>
                    <h2>1.6 BIL. KM</h2> 
                    <span>EST. TRAVEL TIME</span>
                    <h2>7 YEARS</h2>
            </StyledNotes>
            </ContentContainer>
        </>
    )
}
