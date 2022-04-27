import styled from 'styled-components'
import {generateStylesOnAllResolution} from '../../utils/mediaQueries'
import theme from '../../utils/theme'

const StyledNewTwitt = generateStylesOnAllResolution( 
    `display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.new_twitt_button_color}; 
    border: none;
    border-radius: 50%;
    width: 5em;
    height: 5em;
    position: fixed;
    bottom: 4em;
    right: 3em;`,
    {
        tablet:`
            position: static;
            width: 5em;
            height: 5em;
        `,
        laptop:``,
        widescreen:`
            border-radius: 2.5rem;
            width: 10rem;
        `
    },
    styled.div
)

const StyledTwittIcon = generateStylesOnAllResolution( 
    `width: 1.5em;`,
    {
        tablet:``,
        laptop:``,
        widescreen:`display: none;`
    },
    styled.div
)

const StyledText = generateStylesOnAllResolution( 
    `display: none;`,
    {
        tablet:``,
        laptop:``,
        widescreen:`
            display: flex;
            font-weight: bold;
        `
    },
    styled.div
)

export {StyledNewTwitt, StyledTwittIcon, StyledText}