import styled from 'styled-components'
import colors from '../../utils/appColors'
import {mediaQueries} from '../../utils/mediaQueries'

const StyledSidebar = styled.nav`
    position: fixed;
    bottom: 0; 
    width: 100%;
    border: solid 1px ${colors.font_primary};
    background-color: ${colors.background_color};
    height: 3em;
    ${mediaQueries("tablet")`
        width: auto;
        position: static; 
        grid-area: sidebar;
        height: 100vh;
    `}
`

const StyledBarItems = styled.div`
    display: flex;
    justify-content: space-around;
    ${mediaQueries("tablet")`
        display: flex; 
        flex-direction: column;
        height: 100%;
        justify-content: flex-start;
        width: 3em;
        align-items: flex-end;
        padding-left: 3em;
        padding-right: 1em;
    `}
`

export { StyledSidebar, StyledBarItems}