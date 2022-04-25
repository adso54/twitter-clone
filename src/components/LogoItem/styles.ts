import styled from "styled-components";
import {generateStylesOnAllResolution} from '../../utils/mediaQueries'

const StyledLogoItem = generateStylesOnAllResolution( 
    `width: 2em;
    display:flex; 
    align-self: center;
    height: 3em;`,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

export {StyledLogoItem}