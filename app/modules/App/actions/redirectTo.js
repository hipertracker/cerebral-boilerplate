export default function redirectTo({input, services}) {
  services.router.redirect(`/${input.page}`)

}

