import styled from 'styled-components'

export default styled.img`
    transition: all .3s ease-in-out;

    // mobile //
    @media screen and (max-width:650px){
        position: absolute;
        top: 139px;
        left: 50%;
        transform: translateX(-50%);
        width: 170px;
        height: 170px;
    }

    // tablet //
    @media screen and (min-width:651px) and (max-width: 1199px){
        position: absolute;
        top: 220px;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        height: 300px;
    }

    // desktop (small) //
    @media screen and (min-width:1000px) and (max-width:1300px){
        position: absolute;
        top: 343px;
        left: 220px;
        width: 325px;
        height: 325px;
    }

    // desktop //
    @media screen and (min-width:1301px){
        position: absolute;
        top: 343px;
        left: 230px;
        width: 445px;
        height: 445px;
    }
`