import React, { useState, useRef } from 'react'
import Logo from './header/logo'
import Burger from './header/burger'
import Nav from './header/nav'
import Close from './header/close'
import StyledHeader from '../styles/header/styled.header'

export default function Header() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    Close(node, () => setOpen(false));
    return (
        <StyledHeader>
            <Logo />
            <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Nav open={open} setOpen={setOpen} />
            </div>
        </StyledHeader>
    )
}
