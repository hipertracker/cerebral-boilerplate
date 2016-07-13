// eslint-disable-next-line
import React from 'react'
import {connect, Link} from 'cerebral-view-react'
import classNames from 'classnames'
import {PageType, StringType} from '../../../types'

const NavbarLink = ({page, current, label, signals}) => {
  const styles = classNames({
    'uk-active': page === current
  })
  return (
    <li className={styles}>
      <Link signal={signals[page].pageOpened}>
        {label}
      </Link>
    </li>
  )
}

NavbarLink.propTypes = {
  page: PageType,
  current: PageType,
  label: StringType
}

export default connect({
  currentPage: 'app.currentPage'
}, NavbarLink)



