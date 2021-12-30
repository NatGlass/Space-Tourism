import React from 'react'
import Tabs from './tabs'
import StyledTitle from '../../styles/destination/styled.title'
import StyledLine from '../../styles/destination/styled.line'

export default function Content() {
    return (
        <>
            <Tabs />
            <StyledTitle>
               <span>01</span> PICK YOUR DESTINATION
            </StyledTitle>
            <StyledLine />
        </>
    )
}
