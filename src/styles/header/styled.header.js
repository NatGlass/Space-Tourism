import styled from 'styled-components'

export default styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 90px;
    padding: 24px;

    // tablet navbar // 
    @media screen and (min-width: 651px){
        padding-right: 0;
    }
`