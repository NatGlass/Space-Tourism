import styled from 'styled-components'

export default styled.span`
    font-family: 'Barlow Condensed', sans-serif;
    color: #D0D6F9;

    // mobile //
    @media screen and (max-width: 650px){
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
        text-align: center;
        letter-spacing: 2.36px;
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width:999px){
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 16px;
        text-align: center;
        letter-spacing: 2.7px;
    }

    // desktop //
    @media screen and (min-width: 1000px){
        position: absolute;
        top: 0px;
        left: 0;
        font-size: 16px;
        letter-spacing: 2.7px;
    }
`