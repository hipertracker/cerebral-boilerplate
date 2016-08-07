import Router from 'cerebral-module-router'

export default Router({
  '/home': 'app.home.openPage',
  '/admin': 'app.admin.openPage',
  '/*': 'app.openNotFound'
}, {
  onlyHash: false,
  query: true
})

