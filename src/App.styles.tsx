import styled from 'styled-components'
import colors from './utils/appColors'
import {mediaQueries} from './utils/mediaQueries'

const StyledApp = styled.div`
    background-color: ${colors.background_color};
    color: ${colors.font_primary}; 
    height: 100vh;
    
    ${mediaQueries("tablet")`
        display: grid;
        grid-template-areas: 
            "sidebar mainbar popular"
            "sidebar postslist popular"            
    `}

`

export {StyledApp}