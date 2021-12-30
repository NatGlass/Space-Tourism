import styled from 'styled-components'

import LaunchImageLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import LaunchImagePortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg'

import SpacePortLandscape from '../../assets/technology/image-spaceport-landscape.jpg'
import SpacePortPortrait from '../../assets/technology/image-spaceport-portrait.jpg'

import SpaceCapsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg'
import SpaceCapsulePortrait from '../../assets/technology/image-space-capsule-landscape.jpg'

export const LaunchImage = styled.div`
    background: url(${LaunchImageLandscape});
    background-size: cover;

    // mobile (landscape) //
    @media screen and (max-width: 650px){
        position: absolute;
        top: 139px;
        left: 0;
        width: 100vw;
        height: 170px;
    }

    // tablet (landscape) //
    @media screen and (min-width: 651px) and (max-width:999px){
        position: absolute;
        top: 220px;
        left: 0;
        width: 100vw;
        height: 310px;
    }

    // desktop (portrait) //
    @media screen and (min-width: 1000px){
        position: absolute;
        top: 272px;
        right: 0;
        background: url(${LaunchImagePortrait});
        width: 515px;
        height: 527px;
    }
`

export const SpacePortImage = styled.div`
    background: url(${SpacePortLandscape});
    background-size: cover;

    // mobile (landscape) //
    @media screen and (max-width: 650px){
        position: absolute;
        top: 139px;
        left: 0;
        width: 100vw;
        height: 170px;
    }

    // tablet (landscape) //
    @media screen and (min-width: 651px) and (max-width:999px){
        position: absolute;
        top: 220px;
        left: 0;
        width: 100vw;
        height: 310px;
    }

    // desktop (portrait) //
    @media screen and (min-width: 1000px){
        position: absolute;
        top: 272px;
        right: 0;
        background: url(${SpacePortPortrait});
        width: 515px;
        height: 527px;
    }
`

export const SpaceCapsuleImage = styled.div`
    background: url(${SpaceCapsuleLandscape});
    background-size: cover;

    // mobile (landscape) //
    @media screen and (max-width: 650px){
        position: absolute;
        top: 139px;
        left: 0;
        width: 100vw;
        height: 170px;
    }

    // tablet (landscape) //
    @media screen and (min-width: 651px) and (max-width:999px){
        position: absolute;
        top: 220px;
        left: 0;
        width: 100vw;
        height: 310px;
    }

    // desktop (portrait) //
    @media screen and (min-width: 1000px){
        position: absolute;
        top: 272px;
        right: 0;
        background: url(${SpaceCapsulePortrait});
        width: 515px;
        height: 527px;
    }
`
