import styled from 'styled-components'

export default styled.h1`
    color: #fff;
    
    // mobile //
    @media screen and (max-width: 650px){
        position: absolute;
        top: 56px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        font-size: 24px;
        text-align: center;
    }

    // tablet //
    @media screen and (min-width:650px) and (max-width:999px){
        position: absolute;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        font-size: 45px;
        text-align: center;
    }

    // desktop //
    @media screen and (min-width:1000px){
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
        font-size: 56px;
    }
`