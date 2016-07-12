// eslint-disable-next-line
import React from 'react'
import {connect} from 'cerebral-view-react'
import classNames from 'classnames'
import {PageType, StringType} from '../../types'

class NavbarLink extends React.Component {
  constructor(props) {
    super(props)
    this.gotoPage = this.gotoPage.bind(this)
  }

  gotoPage() {
    const {page, signals} = this.props
    signals[page].pageOpened()
  }

  render() {
    const {page, current, label} = this.props
    const styles = classNames({
      'uk-active': page === current
    })

    // const url = `/#/${page}`
    // it also works: <a href={url}>...

    return (
      <li className={styles}>
        <a onClick={this.gotoPage}>
          {label}
        </a>
      </li>
    )
  }
}

NavbarLink.propTypes = {
  page: PageType,
  current: PageType,
  label: StringType
}

export default connect({
  currentPage: 'app.currentPage'
}, NavbarLink)



