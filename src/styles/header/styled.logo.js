import styled from 'styled-components'

export default styled.img`
    width: 40px;
    height: 40px;

    @media screen and (min-width: 650px){
        width: 48px;
        height: 48px;
    }

    // desktop logo // 
    @media screen and (min-width:1000px){
        position: absolute;
        top: 64px;
        left: 55px;
    }
`