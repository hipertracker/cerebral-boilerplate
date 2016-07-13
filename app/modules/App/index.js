import notFoundOpen from './chains/notFoundOpen'

export default (module, controller) => {

  module.addState({
    currentPage: 'home',
    globalMessage: controller.get('globalMessage')
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
