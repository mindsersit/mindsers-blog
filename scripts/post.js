function main() {
  const images = document.querySelectorAll('.kg-gallery-image img')
  images.forEach(function (image) {
    const container = image.closest('.kg-gallery-image')
    const width = image.attributes.width.value
    const height = image.attributes.height.value
    const ratio = width / height

    container.style.flex = ratio + ' 1 0%'
  })
}

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