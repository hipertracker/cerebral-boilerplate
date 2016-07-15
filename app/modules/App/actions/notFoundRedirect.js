module.exports = context => {
  //console.log('@@@', context)
  context.services.router.redirectToSignal('app.home.pageOpened')
}
