import {StyledBarItem,StyledIcon, StyledText } from './styles'

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