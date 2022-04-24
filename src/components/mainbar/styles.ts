import styled from 'styled-components'
import {mediaQueries} from '../../utils/mediaQueries'

const StyledProfile = styled.div`
    width: 3em;
    align-self: center;
    
`

const StyledMainbarWithProfile = styled.div`
    display: flex;
    
`


// function generateStylesOnAllResolution(mobile:string,{
//     tablet,desktop
// }:{ tablet:string, desktop:string}, element=styled.div){
//     // mobile first

//     return element`
//     ${mobile}

//     ${mediaQueries("tablet")`
//         ${tablet}
//     `}

//     ${mediaQueries("desktop")`
//         ${desktop}
//     `}
// `
// }

// const StyledMainbar2 = generateStylesOnAllResolution(
//     `display: flex;
//     justify-content: space-between;
//     padding: 1em;
//     font-weight: bold;
//     font-size: 1.2em;
//     width: 100%;`,
//     {
//         tablet:`grid-area: mainbar`,
//         desktop:``,
//     },
//     styled.section
// )

const StyledMainbar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    font-weight: bold;
    font-size: 1.2em;
    width: 100%;

    ${mediaQueries("tablet")`
        grid-area: mainbar
        
    `}
`

export {StyledMainbar, StyledMainbarWithProfile, StyledProfile}