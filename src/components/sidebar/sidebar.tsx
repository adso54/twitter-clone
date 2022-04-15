import {StyledSidebar, StyledBarItems} from './sidebar.styles'

import BarItem from '../bar-item/bar-item'
import LogoItem from '../logo-item/logo-item'
import NewTwitt from '../new-twitt/new-twitt'

import {ReactComponent as BellIcon} from '../../assets/images/bell.svg'

import {ReactComponent as HouseIcon} from '../../assets/images/house.svg'
import {ReactComponent as LetterIcon} from '../../assets/images/letter.svg'
import {ReactComponent as LogoIcon} from '../../assets/images/logo.svg'
import {ReactComponent as MagnifierIcon} from '../../assets/images/magnifier.svg'
import {ReactComponent as UserIcon} from '../../assets/images/user.svg'

const Sidebar = () => {
    return(
        <StyledSidebar>
            <StyledBarItems>
                <LogoItem Icon = {LogoIcon} />
                <BarItem displayText ='Home' Icon = {HouseIcon} />
                <BarItem displayText ='Search' Icon = {MagnifierIcon} />
                <BarItem displayText ='Notifications' Icon = {BellIcon} />
                <BarItem displayText ='Messages' Icon = {LetterIcon} />
                <NewTwitt /> 
                <BarItem displayText ='Profile' Icon = {UserIcon} />                      
            </StyledBarItems>
            
        </StyledSidebar>
    )
}

export default Sidebar