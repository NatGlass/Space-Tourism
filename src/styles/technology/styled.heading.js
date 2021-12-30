import styled from 'styled-components'

export default styled.h2`
    color: #fff;

    // mobile //
    @media screen and (max-width: 650px){
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        font-size: 24px;
        text-align: center;
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width:999px){
        position: absolute;
        top: 35px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        font-size: 40px;
        text-align: center;
    }

    // desktop //
    @media screen and (min-width: 1000px){
        position: absolute;
        top: 35px;
        left: 0;
        width: 100%;
        font-size: 56px;
    }
`