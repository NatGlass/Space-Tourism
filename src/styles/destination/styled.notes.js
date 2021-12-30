import styled from 'styled-components'

export default styled.div`
    // mobile //
    @media screen and (max-width:650px){
        h2{
            position: absolute;
            top: 667px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 28px;
            color: #fff;
            text-align: center;
        }

        h2:nth-child(4){
            top: 760px;
        }

        span{
            position: absolute;
            top: 638px;
            left: 50%;
            transform: translateX(-50%);
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 14px;
            color: #D0D6F9;
            text-align: center;
            letter-spacing: 2.36px;
        }

        span:nth-child(3){
            top: 731px;
        }
    }

    // tablet //
    @media screen and (min-width:651px) and (max-width: 999px){
        display: flex;
        justify-content: space-around;
        position: absolute;
        top: 900px;
        left: 50%;
        transform: translateX(-50%);
        width: 573px;
        height: 90px;

        h2{
            position: relative;
            font-size: 28px;
            color: #fff;
            text-align: center;
        }

        span{
            position: absolute;
            top: -30px;
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 14px;
            color: #D0D6F9;
            text-align: center;
            letter-spacing: 2.36px;
        }

        span:nth-child(1){
            left: 100px;
        }

        span:nth-child(3){
            right: 75px;
        }
    }
    
    // desktop //
    @media screen and (min-width:1000px){
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 20px;
        left: 0;
        width: 300px;

        h2{
            position: absolute;
            left: 0;
            font-size: 28px;
            color: #fff;
            text-align: left;
        }

        h2:nth-child(4){
            left: 200px;
            white-space: nowrap;
        }

        span{
            position: absolute;
            top: -30px;
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 14px;
            color: #D0D6F9;
            text-align: left;
            letter-spacing: 2.36px;
        }

        span:nth-child(1){
            left: 0px;
        }

        span:nth-child(3){
            left: 200px;
            white-space: nowrap;
        }
    }
`