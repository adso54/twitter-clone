import styled from 'styled-components'
import theme from '../../utils/theme'
import {generateStylesOnAllResolution} from '../../utils/mediaQueries'

const StyledPopular = generateStylesOnAllResolution( 
    `display: none;
    `,
    {
        tablet:`display: flex;
            flex-direction: column;
            width: 100%;
            grid-area: popular;
            border: solid 1px ${theme.border_color};`,
        laptop:`display: flex;
            flex-direction: column;
            width: 100%;`,
        widescreen:``
    },
    styled.div
)

const StyledPopularBar = generateStylesOnAllResolution( 
    `display: none;
    `,
    {
        tablet:``,
        laptop:`display: inline;`,
        widescreen:``
    },
    styled.div
)

const StyledPopularList = generateStylesOnAllResolution( 
    ``,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

export {StyledPopular, StyledPopularBar, StyledPopularList}