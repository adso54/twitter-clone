import styled from 'styled-components'
import {generateStylesOnAllResolution} from '../../utils/mediaQueries'

const StyledPostsList = generateStylesOnAllResolution( 
    `flex-grow: 2;
    grid-area: postslist;`,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

export {StyledPostsList}