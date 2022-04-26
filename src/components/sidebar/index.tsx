import {StyledSidebar, StyledBarItems, MobileHiddenBarItem} from './styles'

import {BarItem} from '../index'
import {LogoItem} from '../index'
import {NewTwitt} from '../index'

import {BellIcon, HouseIcon, LetterIcon, LogoIcon, MagnifierIcon, UserIcon } from '../../assets/images/index'

const Sidebar = () => {
    return(
        <StyledSidebar>
            <StyledBarItems>
                <MobileHiddenBarItem>
                    <LogoItem Icon = {LogoIcon} />
                </MobileHiddenBarItem>
                <BarItem displayText ='Home' Icon = {HouseIcon} />
                <BarItem displayText ='Search' Icon = {MagnifierIcon} />
                <BarItem displayText ='Notifications' Icon = {BellIcon} />
                <BarItem displayText ='Messages' Icon = {LetterIcon} />
                <NewTwitt/> 
                <MobileHiddenBarItem>
                    <BarItem displayText ='Profile' Icon = {UserIcon} />                      
                </MobileHiddenBarItem>
            </StyledBarItems>
        </StyledSidebar>
    )
}

export default Sidebar