import React from 'react'
import ContentContainer from '../../styles/crew/styled.content-container'
import { AnoushehStyledImage } from '../../styles/crew/styled.image'
import StyledLine from '../../styles/crew/styled.line'
import StyledName from '../../styles/crew/styled.name'
import StyledJob from '../../styles/crew/styled.job'
import StyledText from '../../styles/crew/styled.tab-text'
import AnoushehImage from '../../assets/crew/image-anousheh-ansari.webp'

export default function Anousheh() {
    return (
        <>
            <AnoushehStyledImage src={AnoushehImage} />
            <StyledLine />
            <ContentContainer>
                <StyledJob>FLIGHT ENGINEER</StyledJob>
                <StyledName>ANOUSHEH ANSARI</StyledName>
                <StyledText>
                Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.         
                </StyledText>
            </ContentContainer>
        </>
    )
}
