import React from 'react'
import StyledBurger from '../../styles/header/styled.burger'

export default function Burger({ open, setOpen }) {
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)} title="Mobile Menu">
                <div />
                <div />
                <div />
            </StyledBurger>
        </>
    )
}
