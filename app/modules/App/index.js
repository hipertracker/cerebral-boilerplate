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

/**

 The difference between signals, chains and actions
 --------------------------------------------------

 The convection is:

 import smthToDo from './chains/smthToDo'

 controller.addSignals({
    signalName: importedChainName,
    smthHappened: smthToDo
  })

 Signal is named runnable thing registered to the controller. It's usually named as smthHappened

 There is long form signal

 controller.addSignals({
    smthHappened: {
      chain: smthToDo, immediate: true, someOption: 'foo' }
  })

 'chain' is just a property of the signal so read it as

 "register signal with name 'smthHappened' which is represented
 with the chain 'smthToDo'"

 Chains could be composed:

 // ./chains/smthToDoWithExtra
 import smthToDo from './smthToDo'

 export default [ ...smthToDo, anotherAction]

 But signal is a registered function which can be called

 controller.getSignals().smthHappened(payload, options)

 This function would pass a payload through a chain aka action-tree
 */
