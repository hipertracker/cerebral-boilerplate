export default (module, controller) => {
  module.addState({
    globalMessage: controller.get('globalMessage')
  })
}
