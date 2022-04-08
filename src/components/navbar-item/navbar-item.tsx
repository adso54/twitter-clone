import React from 'react';


const NavbarItem = (props: {displayText: string, Icon: any}) => {
    const {displayText, Icon} = props;
    return(
        <div>
            <Icon />
            <div>
                {displayText}
            </div>
        </div>
    )
}

export default NavbarItem