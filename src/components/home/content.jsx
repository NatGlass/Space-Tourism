import React from 'react'
import { NavLink } from 'react-router-dom'
import ContentContainer from '../../styles/home/styled.container'
import { Travel, Space, Paragraph } from '../../styles/home/styled.content'
import Explore from '../../styles/home/styled.explore'

export default function Content() {
    return (
        <>
        <ContentContainer>
            <Travel>SO, YOU WANT TO TRAVEL TO</Travel>
            <Space>SPACE</Space>
            <Paragraph>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Paragraph>
            </ContentContainer>
            <NavLink to="/destination">
            <Explore>
                <h2>EXPLORE</h2>
            </Explore>
            </NavLink>
        </>
    )
}
