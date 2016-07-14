// eslint-disable-next-line
import React, {Component, PropTypes} from 'react'
import {connect} from 'cerebral-view-react'
import Admin from 'components/App/Admin'
import Home from 'components/App/Home'
import Navbar from 'components/App/Navbar'
import RecorderButton from 'components/RecorderButton'
import {PageType, StringType} from 'lib/types'
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

        <hr/>
        <RecorderButton/>
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

