import React from 'react'
import {render} from 'react-dom'
import {Container} from 'cerebral-view-react'
import controller from 'lib/controller'
import App from 'components/App'

render(<Container controller={controller}><App/></Container>, document.querySelector('#app'))
