import {Controller} from 'cerebral'
import Model from 'cerebral-model-immutable'
import DevTools from 'cerebral-module-devtools'
import Http from 'cerebral-module-http'
import RecorderModule from 'cerebral-module-recorder'

import AppModule from './modules/App'
import HomeModule from './modules/Home'
import AdminModule from './modules/Admin'

import router from './routes'

const controller = Controller(Model({
  globalMessage: 'This is a "global" message coming from main controller'
}))

controller.addModules({
  app: AppModule,
  home: HomeModule,
  admin: AdminModule,
  http: Http(),
  devtools: DevTools(),
  recorder: RecorderModule(),
  router
})

export default controller

