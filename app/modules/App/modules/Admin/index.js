import openPage from './chains/openPage'
import typeMessage from './chains/typeMessage'

export default module => {

  module.addState({
    currentPage: 'admin',
    message: ''
  })

  module.addSignals({
    openPage,
    typeMessage, // it's a simple action but for the purpose of learning, it was delegated to action chains

    //typeMessage: {
    //  chain: typeMessage,
    //  immediate: true
    //},
  })
}
