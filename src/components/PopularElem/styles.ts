import styled from 'styled-components'
import theme from '../../utils/theme'
import {generateStylesOnAllResolution} from '../../utils/mediaQueries'

const StyledPopularElement = generateStylesOnAllResolution( 
    `display: none;
    border: 1px solid ${theme.border_color};`,
    {
        tablet:``,
        laptop:`
            display: flex;
            flex-direction: column; 
            gap: 0.2rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 0.5rem;
            height: 100%;
        `,
        widescreen:``
    },
    styled.div
)

const StyledHeader = generateStylesOnAllResolution( 
    ``,
    {
        tablet:``,
        laptop:`
            
            color: ${theme.font_secondary};
        `,
        widescreen:``
    },
    styled.div
)

const StyledName = generateStylesOnAllResolution( 
    ``,
    {
        tablet:``,
        laptop:`
            font-weight: bold;    
        `,
        widescreen:``
    },
    styled.div
)

const StyledTweets = generateStylesOnAllResolution( 
    ``,
    {
        tablet:``,
        laptop:`
            color: ${theme.font_secondary};
        `,
        widescreen:``
    },
    styled.div
)

export {StyledPopularElement, StyledHeader, StyledName, StyledTweets}