import Router from 'cerebral-module-router'

export default Router({
  '/home': 'home.pageOpened',
  '/admin': 'admin.pageOpened',
  '/*': 'app.notFoundOpened'
}, {
  onlyHash: true,
  mapper: {query: true}
})

