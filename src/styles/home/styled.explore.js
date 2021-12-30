import styled from 'styled-components'

export default styled.button`
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #fff;
    border: none;
    outline: 0px solid rgba(255,255,255,0.1);
    cursor: pointer;
    transition: outline .3s ease-in-out;

    h2{
        font-family: 'Bellefair', sans-serif;
        color: #0B0D17;
    }

    // mobile //
    @media screen and (max-width: 650px) {
        position: absolute;
        top: 469px;
        left: 50%;
        transform: translateX(-50%);
        width: 150px;
        height: 150px;

        h2{
            font-size: 20px;
            letter-spacing: 1.25px;
        }

        // hover outline // 
        &:hover{
            outline: 30px solid rgba(255,255,255,.1);
            transition: outline .3s ease-in-out;
        }
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width:999px) {
        position: absolute;
        top: 692px;
        left: 50%;
        transform: translateX(-50%);
        width: 242px;
        height: 242px;

        h2{
            font-size: 32px;
            letter-spacing: 2px;
        }

        // hover outline // 
        &:hover{
            outline: 60px solid rgba(255,255,255,.1);
            transition: outline .3s ease-in-out;
        }
    }

    // prevent overlapping of button on smaller desktop //

    @media screen and (min-width:1000px) and (max-width: 1150px){
        position: absolute;
        top: 495px;
        right: 100px;
        width: 274px;
        height: 274px;

        h2{
            font-size: 32px;
            letter-spacing: 2px;
        }
    }

    // desktop //
    @media screen and (min-width: 1151px) {
        position: absolute;
        top: 495px;
        right: 165px;
        width: 274px;
        height: 274px;

        h2{
            font-size: 32px;
            letter-spacing: 2px;
        }

        // hover outline // 
        &:hover{
            outline: 75px solid rgba(255,255,255,.1);
            transition: outline .3s ease-in-out;
        }
    }
`