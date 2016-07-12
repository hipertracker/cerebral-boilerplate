// eslint-disable-next-line
import React from 'react'
import {PageType} from '../../../types'
import NavbarLink from '../NavbarLink'

const Navbar = ({page}) => {
  return (
    <nav className="uk-navbar">
      <ul className="uk-navbar-nav">
        <NavbarLink
          label="Home"
          page="home"
          current={page}
        />
        <NavbarLink
          label="Admin"
          page="admin"
          current={page}
        />
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  page: PageType
}

export default Navbar
