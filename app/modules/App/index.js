export default (module, controller) => {
  module.addState({
    currentPage: 'home',
    globalMessage: controller.get('globalMessage')
  })
}
