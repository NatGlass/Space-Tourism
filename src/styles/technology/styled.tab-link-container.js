import styled from 'styled-components'

export default styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 99;

    // mobile //
    @media screen and (max-width:650px){
        position: absolute;
        top: 394px;
        left: 50%;
        transform: translateX(-50%);
        width: 152px;
        height: 40px;
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width: 999px){
        position: absolute;
        top: 586px;
        left: 50%;
        transform: translateX(-50%);
        width: 210px;
        height: 60px;
    }

    // desktop //  
    @media screen and (min-width:1000px){
        position: absolute;
        top: 383px;
        left: 165px;
        flex-direction: column;
        width: 80px;
        height: 303px;
    }
`
