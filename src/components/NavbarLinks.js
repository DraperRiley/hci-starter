import React from 'react'
import { Link } from 'gatsby'
import "../Styling/navbarlinks.css"
import "@fontsource/open-sans"

const NavbarLinks = () => {

    return(
        <div class="navbar-link">
            <Link to="/mycourseplan">My Course Plan</Link>
            <Link to="/page-2">My Degrees</Link>
            <Link to="/searchdegrees">Search Degrees</Link>
            <Link to="/mynotes">My Notes</Link>
        </div>

    )

}

export default NavbarLinks