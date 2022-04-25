import styled from 'styled-components'
import colors from '../../utils/appColors'
import {generateStylesOnAllResolution} from '../../utils/mediaQueries'

const StyledSidebar = generateStylesOnAllResolution( 
    `position: fixed;
    bottom: 0; 
    width: 100%;
    border: solid 1px ${colors.font_primary};
    background-color: ${colors.background_color};
    height: 3em;`,
    {
        tablet:`width: auto;
            position: static; 
            grid-area: sidebar;
            height: 100vh;`,
        laptop:``,
        widescreen:``
    },
    styled.nav
)

const StyledBarItems = generateStylesOnAllResolution( 
    `display: flex;
    justify-content: space-around;`,
    {
        tablet:`display: flex; 
            flex-direction: column;
            height: 100%;
            justify-content: flex-start;
            width: 3em;
            align-items: flex-end;
            padding-left: 3em;
            padding-right: 1em;`,
        laptop:``,
        widescreen:``
    },
    styled.div
)

export { StyledSidebar, StyledBarItems}