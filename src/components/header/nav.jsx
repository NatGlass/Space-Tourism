import React from 'react'
import StyledNav from '../../styles/header/styled.nav'
import StyledNavLink from '../../styles/header/styled.link'
import StyledLine from '../../styles/header/styled.line'

export default function Nav({ open }) {
    return (
            <StyledNav open={open}>
                <StyledLine />
                <div>
                    <ul>
                        <StyledNavLink to="/" exact activeClassName="active">
                            <li>HOME</li>
                        </StyledNavLink>
                        <StyledNavLink to="/destination" exact activeClassName="active">
                            <li>DESTINATION</li>
                        </StyledNavLink>
                        <StyledNavLink to="/crew" exact activeClassName="active">
                            <li>CREW</li>
                        </StyledNavLink>
                        <StyledNavLink to="/technology" exact activeClassName="active">
                            <li>TECHNOLOGY</li>
                        </StyledNavLink>
                    </ul>
                </div>
            </StyledNav>
    )
}
