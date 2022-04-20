import styled from 'styled-components'
import colors from '../../utils/appColors'
import {mediaQueries, breakpoints} from '../../utils/mediaQueries'


const StyledPopularElement = styled.div`
    display: none;
    border: 1px solid ${colors.font_secondary};  
    
    ${mediaQueries("tablet")`
        display: flex;
    `}  

`

const StyledHeader = styled.div``

const StyledName = styled.div``

const StyledTweets = styled.div``

export {StyledPopularElement, StyledHeader, StyledName, StyledTweets}