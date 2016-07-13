export default (module, controller) => {

  module.addState({
    currentPage: 'home',
    globalMessage: controller.get('globalMessage')
  })

  module.addSignals({
    notFoundOpened: [
      ({services}) => services.router.redirectToSignal('app.homeOpened')
    ]
  })
}
