import styled from 'styled-components'
import {generateStylesOnAllResolution} from '../../utils/mediaQueries'

const StyledBarItem = generateStylesOnAllResolution( 
    `display: flex;
    padding: 0.25em  `,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledText = generateStylesOnAllResolution( 
    `font-size: 1.5em;
    padding: 0.25em; 
    display: none; `,
    {
        tablet:``,
        laptop:``,
        widescreen:`
            display: flex;
        `
    },
    styled.div
)

const StyledIcon = generateStylesOnAllResolution( 
    `width: 2em;
    display:flex; 
    align-self: center;
    `,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

export {StyledBarItem,StyledIcon, StyledText }