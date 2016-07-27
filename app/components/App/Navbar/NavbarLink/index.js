import React from 'react'
import {connect, Link} from 'cerebral-view-react'
import classNames from 'classnames'

export default connect({
    currentPage: 'app.currentPage'
  }, {
    redirectTo: 'app.redirectTo'
  },
  function NavbarLink({page, current, label, redirectTo}) {
    const styles = classNames({
      'uk-active': page === current
    })

    return (
      <li className={styles}>
        <Link signal={() => redirectTo({page})}>
          {label}
        </Link>
      </li>
    )
  }
)


