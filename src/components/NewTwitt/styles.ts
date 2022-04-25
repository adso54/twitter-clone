import styled from 'styled-components'
import {generateStylesOnAllResolution} from '../../utils/mediaQueries'

const StyledNewTwitt = generateStylesOnAllResolution( 
    `display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1DA1F2; 
    border: none;
    border-radius: 50%;
    width: 5em;
    height: 5em;
    position: fixed;
    bottom: 4em;
    right: 3em;`,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledTwittIcon = generateStylesOnAllResolution( 
    `width: 1.5em;`,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledText = generateStylesOnAllResolution( 
    `display: none;`,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

export {StyledNewTwitt, StyledTwittIcon, StyledText}