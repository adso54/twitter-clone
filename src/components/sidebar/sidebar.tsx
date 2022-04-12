import React from 'react';
import BarItem from '../bar-item/bar-item'
import {StyledSidebar, StyledBarItems} from './sidebar.styles'


import {ReactComponent as BellIcon} from '../../assets/images/bell.svg'
import {ReactComponent as FeatherIcon} from '../../assets/images/feather.svg'
import {ReactComponent as HouseIcon} from '../../assets/images/house.svg'
import {ReactComponent as LetterIcon} from '../../assets/images/letter.svg'
import {ReactComponent as LogoIcon} from '../../assets/images/logo.svg'
import {ReactComponent as MagnifierIcon} from '../../assets/images/magnifier.svg'
import {ReactComponent as StarIcon} from '../../assets/images/star.svg'
import {ReactComponent as UserIcon} from '../../assets/images/user.svg'

const Sidebar = () => {
    return(
        <StyledSidebar>
            <StyledBarItems>
                <BarItem displayText ='Home' Icon = {HouseIcon} />
                <BarItem displayText ='Search' Icon = {MagnifierIcon} />
                <BarItem displayText ='Notifications' Icon = {BellIcon} />
                <BarItem displayText ='Messages' Icon = {LetterIcon} />
                <BarItem displayText ='Profile' Icon = {UserIcon} />          
            </StyledBarItems>
        </StyledSidebar>
    )
}

export default Sidebar