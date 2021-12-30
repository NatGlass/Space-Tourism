import styled from 'styled-components'

export default styled.div`
    // content container //
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // mobile //
    @media screen and (max-width: 650px){
        position: absolute;
        top: 112px;
        left: 50%;
        transform: translateX(-50%);
        width: 80vw;
        max-width: 327px;
        height: 276px;
    }

    // tablet //
    @media screen and (min-width: 650px) and (max-width:999px){
        position: absolute;
        top: 202px;
        left: 50%;
        transform: translateX(-50%);
        width: 450px;
        height: 334px;
    }

    // desktop //
    @media screen and (min-width: 1000px){
        position: absolute;
        top: 387px;
        left: 165px;
        width: 450px;
        height: 382px;
    }
`