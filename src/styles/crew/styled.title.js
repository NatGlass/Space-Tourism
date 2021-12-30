import styled from 'styled-components'

export default styled.h1`
    font-family: 'Barlow Condensed', sans-serif;
    color: #fff;

    // mobile //
    @media screen and (max-width:650px){
        position: absolute;
        top: 88px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 16px;
        letter-spacing: 2.7px;
        white-space: nowrap;
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width: 999px){
        position: absolute;
        top: 136px;
        left: 38.5px;
        font-size: 20px;
        letter-spacing: 3.38px;
    }

    // desktop //
    @media screen and (min-width: 1000px){
        position: absolute;
        top: 212px;
        left: 166.5px;
        font-size: 28px;
        letter-spacing: 4.72px;
    }
    
    // number span // 
    span{
        font-weight: bold;
        opacity: 0.25;
    }

    // mobile span spacing // 
    @media screen and (max-width:650px){
        span{
            padding-right: 18px;
        }
    }

    // tablet span spacing // 
    @media screen and (min-width:651px) and (max-width: 999px){
        span{
            padding-right: 19px;
        }
    }

    // desktop span spacing // 
    @media screen and (min-width:1000px){
        span{
            padding-right: 28px;
        }
    }
`