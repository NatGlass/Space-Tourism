import styled from 'styled-components'

export default styled.h2`
    color: #fff;
    text-align: center;

    // mobile //
    @media screen and (max-width:650px){
        position: absolute;
        top: 383px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 56px;
    }

    // tablet //
    @media screen and (min-width:651px) and (max-width:999px){
        position: absolute;
        top: 639px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 80px;
    }

    // desktop //
    @media screen and (min-width:1000px){
        position: absolute;
        top: 60px;
        left: 0px;
        font-size: 100px;
    }

`