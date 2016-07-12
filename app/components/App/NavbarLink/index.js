// eslint-disable-next-line
import React from 'react'
import {PageType, StringType} from '../../../types'
import classNames from 'classnames'

const NavbarLink = ({page, current, label}) => {
  const styles = classNames({
    'uk-active': page === current
  })

  return (
    <li className={styles}>
      <a href="#">{label}</a>
    </li>
  )
}

NavbarLink.propTypes = {
  page: PageType,
  current: PageType,
  label: StringType
}

export default NavbarLink
