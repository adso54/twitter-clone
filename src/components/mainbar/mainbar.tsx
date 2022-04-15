import {ReactComponent as StarIcon} from '../../assets/images/star.svg'
import {StyledMainbar, StyledMainbarWithProfile, StyledProfile} from './mainbar.styles'

import {ReactComponent as UserIcon} from '../../assets/images/user.svg'

import BarItem from '../bar-item/bar-item'

const Mainbar = () => {

    return(
        <StyledMainbarWithProfile>
            <StyledProfile>
                <BarItem displayText ='Profile' Icon = {UserIcon} hiddenText = {true}/>
            </StyledProfile>
            <StyledMainbar>
                    
                <div>Główna</div>
                <StarIcon />
            </StyledMainbar>
        </StyledMainbarWithProfile>
    )
}

export default Mainbar