import {ReactComponent as StarIcon} from '../../assets/images/star.svg'
import {StyledMainbar, StyledMainbarWithProfile, StyledBarItem} from './mainbar.styles'

import {ReactComponent as UserIcon} from '../../assets/images/user.svg'

import BarItem from '../bar-item/bar-item'

const Mainbar = () => {

    return(
        <StyledMainbarWithProfile>
            <StyledBarItem>
                <BarItem displayText ='Profile' Icon = {UserIcon} hiddenText = {true}/>
            </StyledBarItem>
            <StyledMainbar>
                    
                <div>Główna</div>
                <StarIcon />
            </StyledMainbar>
        </StyledMainbarWithProfile>
    )
}

export default Mainbar