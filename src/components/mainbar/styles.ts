import styled from 'styled-components'
import {generateStylesOnAllResolution} from '../../utils/mediaQueries'

const StyledProfile = generateStylesOnAllResolution( 
    `width: 3em;
    align-self: center;`,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledMainbarWithProfile = generateStylesOnAllResolution( 
    `display: flex;`,
    {
        tablet:``,
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
    font-size: 1.2em;
    width: 100%;`,
    {
        tablet:`grid-area: mainbar`,
        laptop:``,
        widescreen:``
    },
    styled.div
)

export {StyledMainbar, StyledMainbarWithProfile, StyledProfile}