import {StyledNewTwitt, StyledTwittIcon, StyledText} from './new-twitt.styles'
import {ReactComponent as FeatherIcon} from '../../assets/images/feather.svg'

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