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
        width: 88px;
        height: 10px;
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width: 999px){
        position: absolute;
        top: 452px;
        left: 50%;
        transform: translateX(-50%);
        width: 88px;
        height: 10px;
    }

    // desktop //  
    @media screen and (min-width:1000px){
        position: absolute;
        top: 791px;
        left: 167px;
        width: 132px;
        height: 15px;
    }
`
