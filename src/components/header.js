import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../Styling/header.css"

const Header = ({ siteTitle }) => (
  <header>
    
    <div class="header-container">

      <div class="header-logo">  
      <StaticImage src="../images/logo.png" alt="OU" />
      </div>

      <div class="header-logout-block">
        <div class="header-logout">
          <Link to="../">Logout</Link>
        </div>

        <div class="header-help">
          <button onClick={e => alert('No Help\n')} >Help</button>
        </div>

        <div class="header-welcome">
          <p>Welcome, Student</p>
        </div>
      </div>

      <div class="header-avatar">
        <StaticImage src="../images/avatar.png" width={100} height={100} alt="Avatar" />
      </div>

    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
