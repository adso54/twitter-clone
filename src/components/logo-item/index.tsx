import styled from "styled-components";

const StyledLogoItem = styled.div`
    width: 2em;
    display:flex; 
    align-self: center;
    height: 3em;
`

const LogoItem = (props: {Icon: any}) => {
    const {Icon} = props;

    return(
        <StyledLogoItem>
            <Icon />
        </StyledLogoItem>
    )
}

export default LogoItem