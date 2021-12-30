import styled from 'styled-components'

export default styled.span`
    font-family: 'Bellefair', sans-serif;
    color: #fff;
    opacity: 0.5;

    // mobile //
    @media screen and (max-width:650px){
        position: absolute;
        top: 32px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 16px;
    }

    // tablet //
    @media screen and (min-width:650px) and (max-width:999px){
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 24px;
    }

    // desktop //
    @media screen and (min-width:1000px){
        position: absolute;
        top: 0px;
        left: 0;
        font-size: 32px;
    }

`