import styled from 'styled-components'
import colors from '../../utils/appColors'

const StyledPost = styled.div`
    display: flex;
    border: solid 1px ${colors.font_primary}
`

const StyledImage = styled.image`
    img {
        border-radius: 50%;
        width: 3em;
    }
    padding: 1em
`

const StyledBody = styled.div`
    display: inline-block;
`

const StyledNameBar = styled.div`
    display: flex;
    justify-content: flex-start;
`

const StyledName = styled.div`
    font-weight: bold;
    padding: 0.2em;
`

const StyledTwitterName = styled.div`
    color: ${colors.font_secondary};
    padding: 0.2em;
`

const StyledDate = styled.div`
    color: ${colors.font_secondary};
    padding: 0.2em;
`

const StyledContent = styled.div``

const StyledBottomBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
   
`

const StyledBottomBarElement = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex: 1 auto;
`


export { 
    StyledPost, StyledImage, StyledNameBar, StyledName, StyledTwitterName, StyledDate, StyledContent, StyledBottomBar, StyledBottomBarElement, StyledBody
 }