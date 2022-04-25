import {StyledLogoItem} from './styles'

const LogoItem = (props: {Icon: any}) => {
    const {Icon} = props;

    return(
        <StyledLogoItem>
            <Icon />
        </StyledLogoItem>
    )
}

export default LogoItem