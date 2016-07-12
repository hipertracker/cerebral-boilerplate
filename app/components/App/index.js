// eslint-disable-next-line
import React, {Component, PropTypes} from 'react'
import {connect} from 'cerebral-view-react'
import Admin from '../Admin'
import Home from '../Home'
import Navbar from './Navbar'
import {PageType} from '../../types'

const pages = {
  home: Home,
  admin: Admin
}

const App = ({currentPage}) => {
  const Page = pages[currentPage]
  return (
    <div>
      <Navbar page={currentPage}/>
      <Page/>
    </div>
  )
}

App.propTypes = {
  currentPage: PageType
}

export default connect({
  currentPage: 'app.currentPage'
}, App)

