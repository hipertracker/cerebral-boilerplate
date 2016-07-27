import {set} from 'cerebral/operators'

export default module => {

  module.addState({
    currentPage: 'home'
  })

  module.addSignals({
    // it's a simple chain action so it can be added here
    openPage: [
      set('state:app.currentPage', 'home')
    ]
  })
}
