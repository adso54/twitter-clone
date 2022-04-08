import React from 'react';
import NavbarItem from '../navbar-item/navbar-item'

import {ReactComponent as BellIcon} from './images/bell.svg'
import {ReactComponent as CommentIcon} from './images/comment.svg'
import {ReactComponent as DownloadIcon} from './images/download.svg'
import {ReactComponent as FeatherIcon} from './images/feather.svg'
import {ReactComponent as HeartIcon} from './images/heart.svg'
import {ReactComponent as HouseIcon} from './images/house.svg'
import {ReactComponent as LetterIcon} from './images/letter.svg'
import {ReactComponent as LogoIcon} from './images/logo.svg'
import {ReactComponent as MagnifierIcon} from './images/magnifier.svg'
import {ReactComponent as ShareIcon} from './images/share.svg'
import {ReactComponent as StarIcon} from './images/star.svg'
import {ReactComponent as UserIcon} from './images/user.svg'

const Navbar = () => {
    return(
        <nav>
            <NavbarItem displayText ='Home' Icon = {HouseIcon} />
            <NavbarItem displayText ='Explore' Icon = {FeatherIcon} />
            <NavbarItem displayText ='Notifications' Icon = {BellIcon} />
            <NavbarItem displayText ='Messages' Icon = {CommentIcon} />
            <NavbarItem displayText ='Bookmarks' Icon = {MagnifierIcon} />
            <NavbarItem displayText ='Lists' Icon = {HouseIcon} />
            <NavbarItem displayText ='Profile' Icon = {UserIcon} />          
        </nav>
    )
}

export default Navbar