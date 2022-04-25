import styled from 'styled-components'
import colors from '../../utils/appColors'
import {generateStylesOnAllResolution} from '../../utils/mediaQueries'

const StyledPopularElement = generateStylesOnAllResolution( 
    `display: none;
    border: 1px solid ${colors.font_secondary};`,
    {
        tablet:`display: flex;`,
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