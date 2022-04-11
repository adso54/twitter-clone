import React from 'react';
import NavbarItem from '../navbar-item/navbar-item'

import {ReactComponent as BellIcon} from '../../assets/images/bell.svg'
import {ReactComponent as FeatherIcon} from '../../assets/images/feather.svg'
import {ReactComponent as HouseIcon} from '../../assets/images/house.svg'
import {ReactComponent as LetterIcon} from '../../assets/images/letter.svg'
import {ReactComponent as LogoIcon} from '../../assets/images/logo.svg'
import {ReactComponent as MagnifierIcon} from '../../assets/images/magnifier.svg'
import {ReactComponent as StarIcon} from '../../assets/images/star.svg'
import {ReactComponent as UserIcon} from '../../assets/images/user.svg'

const Navbar = () => {
    return(
        <nav>
            <NavbarItem displayText ='Home' Icon = {HouseIcon} />
            <NavbarItem displayText ='Explore' Icon = {FeatherIcon} />
            <NavbarItem displayText ='Notifications' Icon = {BellIcon} />
            <NavbarItem displayText ='Messages' Icon = {BellIcon} />
            <NavbarItem displayText ='Bookmarks' Icon = {MagnifierIcon} />
            <NavbarItem displayText ='Lists' Icon = {HouseIcon} />
            <NavbarItem displayText ='Profile' Icon = {UserIcon} />          
        </nav>
    )
}

export default Navbar