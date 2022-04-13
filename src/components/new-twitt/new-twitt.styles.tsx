import styled from 'styled-components'

const StyledNewTwitt = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1DA1F2; 
    border: none;
    border-radius: 50%;
    width: 5em;
    height: 5em;
    position: fixed;
    bottom: 4em;
    right: 3em;
`

const StyledTwittIcon = styled.div`
    width: 1.5em;
`

const StyledText = styled.div`
    display: none;
`

export {StyledNewTwitt, StyledTwittIcon, StyledText}