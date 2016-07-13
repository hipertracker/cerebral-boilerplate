import notFoundOpen from './chains/notFoundOpen'
import Home from './modules/Home'
import Admin from './modules/Admin'

export default (module, controller) => {

  module.addModules({
    home: Home,
    admin: Admin
  })

  module.addState({
    currentPage: 'home',
    globalMessage: controller.get('globalMessage') // just an example that it is possible
  })

  module.addSignals({
    notFoundOpened: notFoundOpen
  })

  //  It can be also used directly in the module::
  //
  //  module.addSignals({
  //    notFoundOpened: [
  //      ({services}) => services.router.redirectToSignal('app.homeOpened')
  //    ]
  //   })

}
