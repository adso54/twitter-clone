import styled from 'styled-components'
import theme from '../../utils/theme'
import {generateStylesOnAllResolution} from '../../utils/mediaQueries'

const StyledPopularElement = generateStylesOnAllResolution( 
    `display: none;
    border: 1px solid ${theme.border_color};`,
    {
        tablet:`display: none;`,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledHeader = generateStylesOnAllResolution( 
    ``,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledName = generateStylesOnAllResolution( 
    ``,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledTweets = generateStylesOnAllResolution( 
    ``,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

export {StyledPopularElement, StyledHeader, StyledName, StyledTweets}