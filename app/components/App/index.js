// eslint-disable-next-line
import React, {Component, PropTypes} from 'react'
import {connect} from 'cerebral-view-react'
import Admin from '../Admin'
import Home from '../Home'
import Navbar from './Navbar'
import {PageType, StringType} from '../../types'

const pages = {
  home: Home,
  admin: Admin
}

const App = ({currentPage, globalMessage}) => {
  const Page = pages[currentPage]
  return (
    <div>
      <Navbar page={currentPage}/>
      <Page/>
      <hr/>
      {globalMessage}
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

