// eslint-disable-next-line
import React, {Component, PropTypes} from 'react'
import {connect} from 'cerebral-view-react'

import Admin from './Admin'
import Home from './Home'
import Navbar from './Navbar'

import {PageType, StringType} from '../../types'

import styles from './styles.less'

const pages = {
  home: Home,
  admin: Admin
}

const App = props => {
  const {currentPage, globalMessage} = props
  const Page = pages[currentPage]

  return (
    <div className={styles.container}>

      <Navbar page={currentPage}/>

      <div className={styles.content}>
        <Page/>
        <hr/>
        {globalMessage}
      </div>
      
    </div>
  )
}

App.propTypes = {
  currentPage: PageType,
  globalMessage: StringType
}

export default connect({
  currentPage: 'app.currentPage',
  globalMessage: 'app.globalMessage'
}, App)

