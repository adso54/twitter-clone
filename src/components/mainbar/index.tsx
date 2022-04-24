import {ReactComponent as StarIcon} from '../../assets/images/star.svg'
import {StyledMainbar, StyledMainbarWithProfile, StyledProfile} from './styles'

import {UserIcon} from '../../assets/images/index'

import {BarItem} from '../index'

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