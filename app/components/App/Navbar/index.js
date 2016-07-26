import React from 'react'
import {PageType} from 'lib/types'
import NavbarLink from 'components/App/Navbar/NavbarLink'

export default function Navbar({page}) {
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

