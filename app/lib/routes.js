import Router from 'cerebral-module-router'

export default Router({
  '/home': 'app.home.pageOpened',
  '/admin': 'app.admin.pageOpened',
  '/*': 'app.notFoundOpened'
}, {
  onlyHash: true,
  query: true
})

