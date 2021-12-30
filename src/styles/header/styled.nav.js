import styled from 'styled-components'

export default styled.nav`
    // mobile sidebar //
    @media screen and (max-width: 650px){
        position: fixed;
        top: 0;
        right: 0;
        width: 75vw;
        max-width: 254px;
        height: 100vh;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(81.5485px);
        left: 100%;
        transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(100%)'};
        transition: transform .3s ease-in-out;  
        z-index: 100;

    // link container //
    div{
        position: absolute;
        top: 112px;
        width: 100%;
        height: 276px;
        padding-left: 32px;
        }

    // link spacing //
    ul{
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: space-around;
        }
    }

    // tablet nav // 
    @media screen and (min-width: 651px) and (max-width:999px){
        position: absolute;
        top: 0;
        right: 0;
        width: 450px;
        height: 96px;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(81.5485px);

        ul {
        display: flex;
        width: 100%;
        height: 96px;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        }
    }

    // desktop nav // 
    @media screen and (min-width: 1000px){
        position: absolute;
        top: 40px;
        right: 0;
        width: 75vw;
        max-width: 830px;
        height: 96px;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(81.5485px);

        ul {
        display: flex;
        width: 100%;
        height: 96px;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        }
    }

`