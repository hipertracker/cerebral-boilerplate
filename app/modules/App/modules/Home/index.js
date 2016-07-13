import openPage from './chains/openPage'

export default module => {

  module.addState({
    currentPage: 'home'
  })

  module.addSignals({
    pageOpened: openPage
  })
}
