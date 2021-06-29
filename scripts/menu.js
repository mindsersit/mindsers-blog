import { ready } from './ready.js'

ready(async () => {
  const menus = document.querySelectorAll('.profile-menu, .more-menu')
  const page = document.querySelector('body')

  for (const button of document.querySelectorAll(
    '.profile-button, .close-button, .more-button-small-screen'
  )) {
    button.addEventListener('click', event => {
      event.preventDefault()
      page.classList.toggle('no-scroll-small-screen')

      for (const menu of menus) {
        menu.classList.toggle('menu-open')
      }
    })
  }
})
