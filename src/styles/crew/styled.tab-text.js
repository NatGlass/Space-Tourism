import styled from 'styled-components'

export default styled.p`
    font-family: 'Barlow Condensed', sans-serif;
    text-align: center;
    color: #D0D6F9;

    // mobile //
    @media screen and (max-width:650px){
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        width: 80vw;
        max-width: 327px;
        font-size: 15px;
        line-height: 25px;
    }

    // tablet // 
    @media screen and (min-width:651px) and (max-width: 999px){
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        width: 458px;
        font-size: 16px;
        line-height: 28px;
    }

    // desktop //
    @media screen and (min-width:1000px){
        position: absolute;
        top: 140px;
        left: 0;
        width: 444px;
        font-size: 18px;
        line-height: 32px;
        text-align: left;
    }
`