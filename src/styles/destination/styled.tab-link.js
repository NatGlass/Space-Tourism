import styled from 'styled-components'

export default styled.button`
    position: relative;
    font-family: 'Barlow Condensed', sans-serif;
    color: #D0D6F9;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;

    // mobile tab links //
    @media screen and (max-width:650px){
        font-size: 14px;
        letter-spacing: 2.36px;
    }

    // tablet & desktop tab links //
    @media screen and (min-width:651px){
        font-size: 16px;
        letter-spacing: 2.7px;
    }

    // active tab link color // 
    &.active-tab{
        color: #fff;
    }

    // active tab link indicator //
    &.active-tab::after{
        content: '';
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 3px;
        background: #fff;
    }

    
    // hover tab link indicator //
    &:hover::after{
        content: '';
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 3px;
        background: rgba(255,255,255,.3);
    }

`