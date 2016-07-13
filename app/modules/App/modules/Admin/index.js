import openPage from './chains/openPage'

export default module => {

  module.addState({
    currentPage: 'admin'
  })

  module.addSignals({
    pageOpened: openPage
  })
}
