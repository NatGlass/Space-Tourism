import styled from 'styled-components'

export default styled.p`
    color: #D0D6F9;
    font-family: 'Barlow Condensed', sans-serif;

    // mobile //
    @media screen and (max-width: 650px){
        position: absolute;
        top: 120px;
        font-size: 15px;
        text-align: center;
        line-height: 25px;
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width:999px){
        position: absolute;
        top: 95px;
        font-size: 16px;
        text-align: center;
        line-height: 28px;
    }

    // desktop //
    @media screen and (min-width: 1000px){
        position: absolute;
        top: 110px;
        font-size: 18px;
        line-height: 32px;
    }

`