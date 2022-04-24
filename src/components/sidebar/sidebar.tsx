import {StyledSidebar, StyledBarItems} from './sidebar.styles'

import BarItem from '../bar-item/bar-item'
import LogoItem from '../logo-item/logo-item'
import NewTwitt from '../new-twitt/new-twitt'

import {BellIcon, HouseIcon, LetterIcon, LogoIcon, MagnifierIcon, UserIcon } from '../../assets/images/index'

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