import styled from 'styled-components'

export default styled.div`
    // mobile //
    @media screen and (max-width: 650px){
        position: absolute;
        top: 394px;
        left: 50%;
        transform: translateX(-50%);
        width: 90vw;
        max-width: 327px;
        height: 237px;
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width: 999px){
        position: absolute;
        top: 220px;
        left: 50%;
        transform: translateX(-50%);
        width: 520px;
        height: 232px;
    }

    // desktop //
    @media screen and (min-width: 1000px){
        position: absolute;
        top: 400px;
        left: 165.5px;
        width: 614px;
        height: 271px;
    }
`