import styled from 'styled-components'

const StyledBarItem = styled.div`
    width: 3em;
    align-self: center;
`

const StyledMainbarWithProfile = styled.div`
    display: flex;
`

const StyledMainbar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    font-weight: bold;
    font-size: 1.2em;
    width: 100%;
`

export {StyledMainbar, StyledMainbarWithProfile, StyledBarItem}