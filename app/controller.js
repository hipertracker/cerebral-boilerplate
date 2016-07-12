import {Controller} from 'cerebral'
import Model from 'cerebral-model-immutable'
import DevTools from 'cerebral-module-devtools'
import Http from 'cerebral-module-http'
import App from './modules/App'

const controller = Controller(Model({
  globalMessage: 'That is a Global Message'
}))

controller.addModules({
  app: App,
  http: Http(),
  devtools: DevTools()
})

export default controller

