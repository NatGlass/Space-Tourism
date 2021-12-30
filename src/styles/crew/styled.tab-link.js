import styled from 'styled-components'

export default styled.button`
    border-radius: 50%;
    border: none;
    outline: none;
    background: #fff;
    opacity: 0.17;
    cursor: pointer;
    z-index: 100;

    // mobile & tablet circles // 
    @media screen and (max-width:999px){
        width: 10px;
        height: 10px;
    }

    // desktop circles //
    @media screen and (min-width: 1000px){
        width: 15px;
        height: 15px;
    }  

    // active tab circle opacity // 
    &.active-tab{
        opacity: 1;
    }

    // hover circle opacity // 
    &:hover{
        opacity: 0.5;
    }
`