
import Home from './modules/Home'
import Admin from './modules/Admin'
import openNotFound from './chains/openNotFound'
import redirectTo from './chains/redirectTo'

export default (module, controller) => {

  module.addModules({
    home: Home,
    admin: Admin
  })

  module.addState({
    currentPage: 'home',
    globalMessage: controller.get('globalMessage') // just an example that it is possible
  })

  module.addSignals({
    openNotFound,
    redirectTo,
    // or alternative, for simple actions which have no dybamic state paths
    //openNotFound: [
    //  function openNotFound({services}) {
    //    services.router.redirectToSignal('app.homeOpened')
    //  }
    //]
  })

}
