export function ready(fn) {
  if (document.readyState !== 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', function handleLoaded() {
      document.removeEventListener('DOMContentLoaded', handleLoaded)

      fn()
    })
  }
}
