import {StyledSidebar, StyledBarItems} from './styles'

import {BarItem} from '../index'
import {LogoItem} from '../index'
import {NewTwitt} from '../index'

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
                <NewTwitt/> 
                <BarItem displayText ='Profile' Icon = {UserIcon} />                      
            </StyledBarItems>
        </StyledSidebar>
    )
}

export default Sidebar