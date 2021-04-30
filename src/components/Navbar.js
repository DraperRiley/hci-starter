import React, {useState} from 'react'
import NavbarLinks from './NavbarLinks'

//this is a sort of container for the links in the navigation bar
const Navbar = () => {

    return(
        <div class="navbar">
            <NavbarLinks />
        </div>
    )

}

export default Navbar