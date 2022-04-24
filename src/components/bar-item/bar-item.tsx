import styled from 'styled-components'


// w planach
// const theme = {
//     texts:{
//         h1:{
//           'font-size':'40px',  
//           'letter-spacing':'1px',  
//         }
//     }
// }



const StyledBarItem = styled.div`
    display: flex;
    padding: 0.25em  
`

const StyledText = styled.div`
    font-size: 1.5em;
    padding: 0.25em; 
    display: none; 
`

StyledText.defaultProps = {
    
}



const StyledIcon = styled.div`
    width: 2em;
    display:flex; 
    align-self: center;
`

const BarItem = (props: {displayText: string, Icon: any, hiddenText?: boolean}) => {
    const {displayText, Icon, hiddenText} = props;
    

    return(
        <StyledBarItem>
            <StyledIcon>
                <Icon />
            </StyledIcon>
            <StyledText>
                {!hiddenText ? displayText : ""}
            </StyledText>
        </StyledBarItem>
    )
}

export default BarItem