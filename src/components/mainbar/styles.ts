import styled from 'styled-components'
import {generateStylesOnAllResolution} from '../../utils/mediaQueries'
import theme from '../../utils/theme'


const StyledMainbarWithProfile = generateStylesOnAllResolution( 
    `display: flex;
    border: solid 1px ${theme.border_color};
    `,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledProfile = generateStylesOnAllResolution( 
    `width: 3em;
    align-self: center;
    padding-left: 1.5rem;`,
    {
        tablet:`display: none;`,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledMainbar = generateStylesOnAllResolution( 
    `display: flex;
    justify-content: space-between;
    padding: 1em;
    font-weight: bold;
    font-size: 1.5em;
    width: 100%;`,
    {
        tablet:`grid-area: mainbar`,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledStarIcon = generateStylesOnAllResolution(
    `
    height: 100%;
    `,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

export {StyledMainbar, StyledMainbarWithProfile, StyledProfile, StyledStarIcon}