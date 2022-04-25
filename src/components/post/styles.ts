import styled from 'styled-components'
import colors from '../../utils/appColors'
import {generateStylesOnAllResolution} from '../../utils/mediaQueries'

const StyledPost = generateStylesOnAllResolution( 
    `display: flex;
    border: solid 1px ${colors.font_primary}`,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledImage = generateStylesOnAllResolution( 
    `img {
        border-radius: 50%;
        width: 3em;
    }
    padding: 1em`,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.image
)

const StyledBody = generateStylesOnAllResolution( 
    `display: inline-block;`,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledNameBar = generateStylesOnAllResolution( 
    `display: flex;
    justify-content: flex-start;`,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledName = generateStylesOnAllResolution( 
    `font-weight: bold;
    padding: 0.2em;`,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledTwitterName = generateStylesOnAllResolution( 
    `color: ${colors.font_secondary};
    padding: 0.2em;`,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledDate = generateStylesOnAllResolution( 
    `color: ${colors.font_secondary};
    padding: 0.2em;`,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledContent = generateStylesOnAllResolution( 
    ``,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledBottomBar = generateStylesOnAllResolution( 
    `display: flex;
    justify-content: space-between;
    padding: 1em;`,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledBottomBarElement = generateStylesOnAllResolution( 
    `display: flex;
    justify-content: space-evenly;
    flex: 1 auto;`,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)


export { 
    StyledPost, StyledImage, StyledNameBar, StyledName, StyledTwitterName, StyledDate, StyledContent, StyledBottomBar, StyledBottomBarElement, StyledBody
 }