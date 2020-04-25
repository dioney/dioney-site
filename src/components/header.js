// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo-dioney-vitor.svg"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div>
      <h1 style={{ margin: 0 }}>
        <Logo style={{ maxWidth: 56 }} />
      </h1>
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
