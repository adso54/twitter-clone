import styled from 'styled-components'
import colors from './utils/appColors'
import {generateStylesOnAllResolution} from './utils/mediaQueries'

const StyledApp = generateStylesOnAllResolution( 
    `
    color: ${colors.font_primary}; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    `,
    {
        tablet:`display: grid;
            grid-template-columns: 15% auto 15%;
            align-content: start;
            grid-template-areas: 
            "sidebar mainbar popular"
            "sidebar postslist popular" `,
        laptop:`grid-template-columns: 15% auto 25%;`,
        widescreen:``
    },
    styled.div
)

export {StyledApp}