import {copy} from 'cerebral/operators'

export default [
  copy('input:message', 'state:app.admin.message')
]
