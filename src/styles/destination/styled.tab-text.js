import styled from 'styled-components'

export default styled.p`
    font-family: 'Barlow Condensed', sans-serif;
    text-align: center;
    color: #D0D6F9;

    // mobile //
    @media screen and (max-width:650px){
        position: absolute;
        top: 448px;
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
        top: 739px;
        left: 50%;
        transform: translateX(-50%);
        width: 80vw;
        max-width: 573px;
        font-size: 16px;
        line-height: 25px;
    }

    // desktop //
    @media screen and (min-width:1000px){
        position: absolute;
        top: 200px;
        left: 0;
        width: 100%;
        font-size: 18px;
        line-height: 25px;
        text-align: left;
    }
`