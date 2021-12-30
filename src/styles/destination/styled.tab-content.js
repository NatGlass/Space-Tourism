import styled from 'styled-components'

export default styled.div`
    // hide inactive tab content //
    display: none;

    // show active tab content //  
    &.active-content{
        display: block;
    }
`