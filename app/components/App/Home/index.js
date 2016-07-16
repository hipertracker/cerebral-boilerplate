// eslint-disable-next-line
import React from 'react'
import {connect} from 'cerebral-view-react'
import {StringType} from 'lib/types'
import classNames from 'classnames'
import {blink as blinkStyle} from './styles.css'

const Home = ({incomingMessage}) => {
  const text = incomingMessage ? 'Admin said:' : 'Waiting for a message from Admin page...'
  const styles = classNames({
    'uk-alert-warning': true,
    [blinkStyle]: incomingMessage === ''
  })
  return (
    <div>
      <h3>Hello from Home :)</h3>
      <div className={styles}>
        {text} <span className="uk-text-bold">{incomingMessage}</span>
      </div>
    </div>
  )
}

Home.propTypes = {
  incomingMessage: StringType
}

export default connect({
  incomingMessage: 'app.admin.message'
}, Home)
