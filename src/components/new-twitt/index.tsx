import {StyledNewTwitt, StyledTwittIcon, StyledText} from './styles'
import {FeatherIcon} from '../../assets/images/index'

const NewTwitt = () => {
    return(
        <StyledNewTwitt>
            <StyledTwittIcon>
                <FeatherIcon />
            </StyledTwittIcon>
            <StyledText>
                Tweet
            </StyledText>
        </StyledNewTwitt>
    )
}

export default NewTwitt