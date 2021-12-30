import React from 'react'
import ContentContainer from '../../styles/destination/styled.content-container'
import StyledHeading from '../../styles/destination/styled.heading'
import StyledImage from '../../styles/destination/styled.image'
import StyledText from '../../styles/destination/styled.tab-text'
import StyledNotes from '../../styles/destination/styled.notes'
import MoonImage from '../../assets/destination/image-moon.webp'

export default function Moon() {
    return (
        <>
            <StyledImage src={MoonImage} />
            <ContentContainer>
                <StyledHeading>MOON</StyledHeading>
                <StyledText>
                See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                </StyledText>
                <StyledNotes>
                    <span>AVG. DISTANCE</span>
                    <h2>384,400 KM</h2> 
                    <span>EST. TRAVEL TIME</span>
                    <h2>3 DAYS</h2>
                </StyledNotes>
            </ContentContainer>
        </>
    )
}
