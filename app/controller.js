import {Controller} from 'cerebral'
import Model from 'cerebral-model-immutable'
import DevTools from 'cerebral-module-devtools'
import Http from 'cerebral-module-http'
import Router from 'cerebral-module-router'

import App from './modules/App'
import Home from './modules/Home'
import Admin from './modules/Admin'

const controller = Controller(Model({
  globalMessage: 'This is a Global Message'
}))

controller.addModules({
  app: App,
  home: Home,
  admin: Admin,
  http: Http(),
  devtools: DevTools(),
  router: Router({
    '/home': 'home.pageOpened',
    '/admin': 'admin.pageOpened'
  }, {
    onlyHash: true
  })
})

export default controller

