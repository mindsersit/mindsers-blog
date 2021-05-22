function main() {}

{
  if (document.readyState !== 'loading') {
    main()
  } else {
    document.addEventListener('DOMContentLoaded', function handleLoaded() {
      document.removeEventListener('DOMContentLoaded', handleLoaded)

      main()
    })
  }
}
