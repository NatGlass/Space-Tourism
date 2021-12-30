import React from 'react'
import ContentContainer from '../../styles/destination/styled.content-container'
import StyledHeading from '../../styles/destination/styled.heading'
import StyledImage from '../../styles/destination/styled.image'
import StyledText from '../../styles/destination/styled.tab-text'
import StyledNotes from '../../styles/destination/styled.notes'
import MarsImage from '../../assets/destination/image-mars.webp'

export default function Mars() {
    return (
        <>
            <StyledImage src={MarsImage} />
            <ContentContainer>
                <StyledHeading>MARS</StyledHeading>
                <StyledText>
                    Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
                </StyledText>
                <StyledNotes>
                    <span>AVG. DISTANCE</span>
                    <h2>225 MIL. KM</h2> 
                    <span>EST. TRAVEL TIME</span>
                    <h2>9 MONTHS</h2>
                </StyledNotes>
            </ContentContainer>
        </>
    )
}
