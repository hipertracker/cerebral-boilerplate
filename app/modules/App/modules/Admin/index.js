import openPage from './chains/openPage'

export default module => {

  module.addState({
    currentPage: 'admin'
  })

  module.addSignals({
    // it's a simple action but for the purpose of learning, it was delegated to action chains
    pageOpened: openPage
  })
}
