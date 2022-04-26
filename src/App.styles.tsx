import styled from 'styled-components'
import colors from './utils/appColors'
import {generateStylesOnAllResolution} from './utils/mediaQueries'

const StyledApp = generateStylesOnAllResolution( 
    `
    background-color: ${colors.background_color};
    color: ${colors.font_primary}; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    `,
    {
        tablet:`display: grid;
            grid-template-areas: 
            "sidebar mainbar popular"
            "sidebar postslist popular" `,
        laptop:``,
        widescreen:``
    },
    styled.div
)

export {StyledApp}