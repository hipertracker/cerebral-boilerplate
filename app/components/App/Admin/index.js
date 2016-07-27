import React from 'react'
import {connect} from 'cerebral-view-react'

export default connect({
    message: 'app.admin.message'
  }, {
    type: 'app.admin.typeMessage'
  },
  function Admin({message, type}) {
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
            onChange={e => type({message: e.target.value})}
          />
        </form>
        <div className="uk-text-muted">{message}</div>
      </div>
    )
  }
)
