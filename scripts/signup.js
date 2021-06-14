import { ready } from './ready.js'

ready(() => {
  const form = document.querySelector('form[data-members-form="signup"]')

  function handler(event) {
    const label = event.target.value

    if (event.target.checked) {
      const input = document.createElement('input')
      input.value = label
      input.dataset.membersLabel = ''
      input.type = 'hidden'

      form.appendChild(input)
      return
    }

    document.querySelectorAll('input[data-members-label]').forEach(el => {
      if (el.value === label) {
        el.remove()
      }
    })
  }

  document.querySelector('#en-check').addEventListener('change', handler)
  document.querySelector('#fr-check').addEventListener('change', handler)
})
