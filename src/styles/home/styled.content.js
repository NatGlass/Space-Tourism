import styled from 'styled-components'

export const Travel = styled.p`
    color: #D0D6F9;
    font-family: 'Barlow Condensed', sans-serif;
    text-align: center;

    // mobile //
    @media screen and (max-width:650px){
        height: 19px;
        font-size: 16px;
        letter-spacing: 2.7px;
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width:999px){
        height: 24px;
        font-size: 20px;
        letter-spacing: 3.38px;
    }

    // desktop //
    @media screen and (min-width: 1000px){
        height: 34px;
        font-size: 28px;
        letter-spacing: 4.72px;
        text-align: left;
    }
`

export const Space = styled.h1`
    color: #fff;
    font-family: 'Bellefair', sans-serif;
    text-align: center;

    // mobile // 
    @media screen and (max-width:650px){
        height: 100px;
        font-size: 80px;
    }

    // tablet // 
    @media screen and (min-width:651px) and (max-width:999px){
        height: 150px;
        font-size: 150px;
    }

    // desktop // 
    @media screen and (min-width:1000px){
        height: 172px;
        font-size: 150px;
    }
`
export const Paragraph = styled.p`
    color: #D0D6F9;
    font-family: 'Barlow Condensed', sans-serif;
    text-align: center;

    // mobile // 
    @media screen and (max-width:650px){
        height: 125px;
        font-size: 15px;
        line-height: 25px;
    }

    // tablet // 
    @media screen and (min-width:651px) and (max-width:1399px){
        height: 112px;
        font-size: 16px;
        line-height: 28px;
    }

    // desktop // 
    @media screen and (min-width:1000px){
        height: 128px;
        font-size: 18px;
        text-align: left;
        line-height: 32px;
    }
`
