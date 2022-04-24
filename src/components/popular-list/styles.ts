import styled from 'styled-components'
import {mediaQueries} from '../../utils/mediaQueries'


const StyledPopular = styled.div`
    display: none;

    ${mediaQueries("tablet")`
        display: flex;
        flex-direction: column;
        width: 3em;
        grid-area: popular;
        border: solid 1px #FFFFFF;
    `}

    ${mediaQueries("laptop")`
        display: flex;
        flex-direction: column;
        width: 100%;
    `} 
`

const StyledPopularBar = styled.div`
    display: none;  
    ${mediaQueries("laptop")`
        display: inline;
    `}   
`

const StyledPopularList = styled.div``

export {StyledPopular, StyledPopularBar, StyledPopularList}