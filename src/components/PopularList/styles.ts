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
        `,
        laptop:`
            background-color: ${theme.popular_list_background_color};
            display: flex;
            flex-direction: column;
            height: 70%;
            width: 90%;
            margin: 1rem;
            border-radius: 25px;
        `,
        widescreen:``
    },
    styled.div
)

const StyledPopularBar = generateStylesOnAllResolution( 
    `display: none;
    `,
    {
        tablet:``,
        laptop:`
            display: flex;
            align-self: flex-start;
            padding: 1rem;
            font-size: 1.2rem;
            font-weight: bold;
        `,
        widescreen:``
    },
    styled.div
)

const StyledPopularList = generateStylesOnAllResolution( 
    ``,
    {
        tablet:``,
        laptop:`
            display: flex;
            flex-direction: column;    
        `,
        widescreen:``
    },
    styled.div
)

export {StyledPopular, StyledPopularBar, StyledPopularList}