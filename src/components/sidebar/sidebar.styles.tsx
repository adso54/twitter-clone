import styled from 'styled-components'

const StyledSidebar = styled.nav`
    position: fixed;
    bottom: 0; 
    width: 100%;
    border: solid 1px #788C92;
    background-color: #000000;
`

const StyledBarItems = styled.div`
    display: flex;
    justify-content: space-around;
`

export { StyledSidebar, StyledBarItems}