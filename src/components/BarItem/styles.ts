import styled from 'styled-components'
import {generateStylesOnAllResolution} from '../../utils/mediaQueries'

// w planach
// const theme = {
//     texts:{
//         h1:{
//           'font-size':'40px',  
//           'letter-spacing':'1px',  
//         }
//     }
// }


// StyledText.defaultProps = {
    
// }

const StyledBarItem = generateStylesOnAllResolution( 
    `display: flex;
    padding: 0.25em  `,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledText = generateStylesOnAllResolution( 
    `font-size: 1.5em;
    padding: 0.25em; 
    display: none; `,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

const StyledIcon = generateStylesOnAllResolution( 
    `width: 2em;
    display:flex; 
    align-self: center;`,
    {
        tablet:``,
        laptop:``,
        widescreen:``
    },
    styled.div
)

export {StyledBarItem,StyledIcon, StyledText }