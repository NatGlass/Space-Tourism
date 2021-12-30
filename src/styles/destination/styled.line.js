import styled from 'styled-components'

export default styled.div`
    // mobile //
    @media screen and (max-width: 650px){
        position: absolute;
        top: 600px;
        left: 50%;
        transform: translateX(-50%);
        width: 80vw;
        max-width: 327px;
        height: 1px;
        background: #383B4B;
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width: 999px){
        position: absolute;
        top: 845px;
        left: 50%;
        transform: translateX(-50%);
        width: 573px;
        height: 1px;
        background: #383B4B;
    }

    // desktop //
    @media screen and (min-width: 1000px){
        position: absolute;
        top: 692px;
        right: 163px;
        width: 444px;
        height: 1px;
        background: #383B4B;
    }
`