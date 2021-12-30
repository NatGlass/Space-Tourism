import styled from 'styled-components'

import Mobile from '../../assets/technology/background-technology-mobile.jpg'
import Tablet from '../../assets/technology/background-technology-tablet.jpg'
import Desktop from '../../assets/technology/background-technology-desktop.jpg'

export default styled.div`
    // background // 
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -10;

    // mobile //
    @media screen and (max-width:650px){
        background: url(${Mobile});
        background-size: cover;
        background-repeat: no-repeat;
    }

    // tablet //  
    @media screen and (min-width: 651px) and (max-width: 999px){
        background: url(${Tablet});
        background-size: cover;
        background-repeat: no-repeat;
    }

    // desktop //  
    @media screen and (min-width: 1000px){
        background: url(${Desktop});
        background-size: cover;
        background-repeat: no-repeat;
    }
`