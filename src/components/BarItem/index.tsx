import {StyledBarItem,StyledIcon, StyledText } from './styles'

const BarItem = (props: {displayText: string, Icon: any}) => {
    const {displayText, Icon} = props;
    
    return(
        <StyledBarItem>
            <StyledIcon>
                <Icon />
            </StyledIcon>
            <StyledText>
               {displayText}
            </StyledText>
        </StyledBarItem>
    )
}

export default BarItem