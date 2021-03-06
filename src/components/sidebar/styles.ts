import styled from 'styled-components'
import theme from '../../utils/theme'
import {generateStylesOnAllResolution} from '../../utils/mediaQueries'

const StyledSidebar = generateStylesOnAllResolution( 
    `position: fixed;
    bottom: 0; 
    width: 100%;
    border: solid 1px ${theme.border_color};
    background-color: ${theme.background_color};
    height: 3em;
    overflow: hidden;
    `,
    {
        tablet:`
            position: static; 
            grid-area: sidebar;
            height: 100%;
            `,
            
        laptop:``,
        widescreen:``
    },
    styled.nav
)

const StyledBarItems = generateStylesOnAllResolution( 
    `display: flex;
    justify-content: space-around;
    height: 100%; 
    `,
    {
        tablet:`display: flex; 
            flex-direction: column;
            height: 100%;
            justify-content: start;
            width: 100%;
            align-items: center;
            gap: 1.5rem; 
            `,
        laptop:``,
        widescreen:`
            align-items: start;
            padding-left: 1rem;
        `
    },
    styled.div
)

const StyledLogoItem = generateStylesOnAllResolution(
    `display: none;
    `,
    {
        tablet:`
            display: flex;
            padding-top: 2rem;
        `,
        laptop:``,
        widescreen:``
    },
    styled.div
    )

const StyledProfileItem = generateStylesOnAllResolution(
    `display: none;`,
    {
        tablet:`
            display: flex;
            align-items: end;
            height: 100%;
            padding-bottom: 3rem;
            
        `,
        laptop:``,
        widescreen:``
    },
    styled.div
    )

export { StyledSidebar, StyledBarItems, StyledLogoItem, StyledProfileItem}