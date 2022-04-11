import React from 'react';
import styled from 'styled-components'


const StyledNavbarItem = styled.div`
    display: flex;
    padding: 0.25em  
`

const StyledText = styled.div`
    font-size: 1.5em;
    padding: 0.25em; 
`

const StyledIcon = styled.div`
    width: 2em;
    display:flex; 
    align-self: center;
`

const NavbarItem = (props: {displayText: string, Icon: any}) => {
    const {displayText, Icon} = props;
    

    return(
        <StyledNavbarItem>
            <StyledIcon>
                <Icon />
            </StyledIcon>
            <StyledText>
                {displayText}
            </StyledText>
        </StyledNavbarItem>
    )
}

export default NavbarItem