import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledNavLink = styled(NavLink)`
    display: inline-flex;
    position: relative;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 2.7px;
    cursor: pointer;
    color: #fff;

    // mobile links // 
    @media screen and (max-width:650px){
        font-size: clamp(16px, 4vw, 18px);

        // numbers // 
        &:before{
            font-weight: bold;
        }

        &:nth-child(1):before{
            content: '00';
            padding-right: 11px;
        }

        &:nth-child(2):before{
            content: '01';
            padding-right: 14px;
        }

        &:nth-child(3):before{
            content: '02';
            padding-right: 12px;
        }

        &:nth-child(4):before{
            content: '03';
            padding-right: 12px;
        }

        // mobile link indicator //
        &.active::after{
            content: '';
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            width: 4px;
            height: 31px;
            background: #fff;
        }
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width: 999px){
        font-size: 14px;
        
        // tablet link indicator //
        &.active::after{
            content: '';
            position: absolute;
            bottom: -42px;
            transform: translateY(-50%);
            width: 100%;
            height: 3px;
            background: #fff;
            }

            // tablet hover link indicator //
            &:hover::after{
                content: '';
                position: absolute;
                bottom: -42px;
                transform: translateY(-50%);
                width: 100%;
                height: 3px;
                background: #fff;
                opacity: 0.3;
            }
    }

    // desktop //
    @media screen and (min-width:1000px){
        
        // numbers // 
        &:before{
            font-weight: bold;
        }

        &:nth-child(1):before{
            content: '00';
            padding-right: 11px;
        }

        &:nth-child(2):before{
            content: '01';
            padding-right: 14px;
        }

        &:nth-child(3):before{
            content: '02';
            padding-right: 12px;
        }

        &:nth-child(4):before{
            content: '03';
            padding-right: 12px;
        }

        // desktop link indicator //
        &.active::after{
            content: '';
            position: absolute;
            bottom: -42px;
            transform: translateY(-50%);
            width: 100%;
            height: 3px;
            background: #fff;
            }

            // desktop hover link indicator //
            &:hover::after{
                content: '';
                position: absolute;
                bottom: -42px;
                transform: translateY(-50%);
                width: 100%;
                height: 3px;
                background: #fff;
                opacity: 0.3;
            }
    }
    
`

export default StyledNavLink