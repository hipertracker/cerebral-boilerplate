// eslint-disable-next-line
import React from 'react'
import {connect} from 'cerebral-view-react'
import {StringType} from 'lib/types'

class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.messageTyped = this.messageTyped.bind(this)
  }

  messageTyped(evnt) {
    const message = evnt.target.value
    this.props.signals.app.admin.messageTyped({message})
  }

  render() {
    const {message} = this.props

    return (
      <div>
        <h3>Hello from Admin :)</h3>
        <p>
          Home is waiting for your message, type something and
          switch to the Home tab
        </p>
        <form className="uk-form">
          <input
            type="text"
            placeholder="Type a message..."
            className="uk-form-width-large"
            value={message}
            onChange={this.messageTyped}
          />
        </form>
        <div className="uk-text-muted">{message}</div>
      </div>
    )
  }
}

Admin.propTypes = {
  message: StringType
}

export default connect({
  message: 'app.admin.message'
}, Admin)


