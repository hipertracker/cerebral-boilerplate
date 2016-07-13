import notFoundRedirected from './chains/notFoundRedirected'

export default (module, controller) => {

  module.addState({
    currentPage: 'home',
    globalMessage: controller.get('globalMessage')
  })

  module.addSignals({
    notFoundOpened: notFoundRedirected
  })

  /***
   * If it is a simple signal, instead of using actions, it
   * can be used directly in the module, like that:
   *
   *  module.addSignals({
   *    notFoundOpened: [
   *      ({services}) => services.router.redirectToSignal('app.homeOpened')
   *    ]
   *  })
   *
   */
}
