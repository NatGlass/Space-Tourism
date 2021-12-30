import styled from 'styled-components'

export default styled.button`
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255,0.25);
    outline: none;
    background: none;
    cursor: pointer;
    z-index: 1;
    font-family: 'Bellefair', sans-serif;
    color: #fff;

    // mobile circles // 
    @media screen and (max-width:650px){
        width: 40px;
        height: 40px;
        font-size: 16px;
    }

    // tablet circles // 
    @media screen and (min-width:651px) and (max-width:999px){
        width: 60px;
        height: 60px;
        font-size: 24px;
    }

    // desktop circles //
    @media screen and (min-width: 1000px){
        width: 80px;
        height: 80px;
        font-size: 32px;
    }  

    // active tab circle background // 
    &.active-tab{
        background: #fff;
        color: #0B0D17;
    }

`