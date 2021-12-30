import styled from 'styled-components'

export default styled.div`
    // mobile //
    @media screen and (max-width: 650px){
        position: absolute;
        top: 409px;
        left: 50%;
        transform: translateX(-50%);
        width: 90vw;
        max-width: 327px;
        height: 237px;
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width: 999px){
        position: absolute;
        top: 690px;
        left: 50%;
        transform: translateX(-50%);
        width: 458px;
        height: 237px;
    }

    // desktop //
    @media screen and (min-width: 1000px){
        position: absolute;
        top: 383px;
        left: 325px;
        width: 470px;
        height: 303px;
    }
`