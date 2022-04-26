import { StyledSidebar, StyledBarItems, StyledLogoItem, StyledProfileItem} from './styles'

import {BarItem} from '../index'
import {LogoItem} from '../index'
import {NewTwitt} from '../index'

import {BellIcon, HouseIcon, LetterIcon, LogoIcon, MagnifierIcon, UserIcon } from '../../assets/images/index'

const Sidebar = () => {
    return(
        <StyledSidebar>
            <StyledBarItems>
                <StyledLogoItem>
                    <LogoItem Icon = {LogoIcon} />
                </StyledLogoItem>
                <BarItem displayText ='Home' Icon = {HouseIcon} />
                <BarItem displayText ='Search' Icon = {MagnifierIcon} />
                <BarItem displayText ='Notifications' Icon = {BellIcon} />
                <BarItem displayText ='Messages' Icon = {LetterIcon} />
                <NewTwitt/> 
                <StyledProfileItem>
                    <BarItem displayText ='Profile' Icon = {UserIcon} />                      
                </StyledProfileItem>
            </StyledBarItems>
        </StyledSidebar>
    )
}

export default Sidebar