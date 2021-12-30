import styled from 'styled-components'

export default styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 99;

    // mobile //
    @media screen and (max-width:650px){
        position: absolute;
        top: 335px;
        left: 50%;
        transform: translateX(-50%);
        width: 237.5px;
        height: 28px;
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width: 999px){
        position: absolute;
        top: 573px;
        left: 50%;
        transform: translateX(-50%);
        width: 285.5px;
        height: 34px;
    }

    // desktop //  
    @media screen and (min-width:1000px){
        position: absolute;
        top: 310px;
        right:322.5px;
        width: 285.5px;
        height: 34px;
    }
`
