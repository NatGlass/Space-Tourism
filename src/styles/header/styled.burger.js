import styled from 'styled-components';

export default styled.button`
    // burger container //
    position: fixed;
    top:33px;
    right: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 27px;
    height: 21px;
    background: transparent;
    border: none;
    outline: none;
    overflow: hidden;
    cursor: pointer;
    z-index: 1000;

    // bars //
    div{
        position: relative;
        width: 100%;
        height: 3px;
        background: #D0D6F9;
        transition: all .3s linear;
        transform-origin: 1px;

        :nth-child(1){
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'}
        }

        :nth-child(2){
            opacity: ${({open}) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(40px)' : 'translateX(0)'}
        }
        
        :nth-child(3){
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'}
        }
    }

    // hide on large screens //
    @media screen and (min-width: 650px){
        display: none;
    }
`