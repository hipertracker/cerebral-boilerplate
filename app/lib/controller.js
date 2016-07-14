import {Controller} from 'cerebral'
import Model from 'cerebral-model-immutable'
import DevTools from 'cerebral-module-devtools'
import Http from 'cerebral-module-http'
import RecorderModule from 'cerebral-module-recorder'
import App from 'modules/App'
import router from 'lib/routes'

const controller = Controller(Model({
  globalMessage: 'This is a "global" message coming from main controller'
}))

controller.addModules({
  app: App,
  http: Http(),
  devtools: DevTools(),
  recorder: RecorderModule(),
  router
})

export default controller

