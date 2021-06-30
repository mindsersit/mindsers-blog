import { ready } from './ready.js'

const isDark =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const highlighter = shiki.getHighlighter({
  theme: isDark ? 'github-light' : 'github-dark',
})

ready(async () => {
  const images = document.querySelectorAll('.kg-gallery-image img')
  images.forEach(function (image) {
    const container = image.closest('.kg-gallery-image')
    const width = image.attributes.width.value
    const height = image.attributes.height.value
    const ratio = width / height

    container.style.flex = ratio + ' 1 0%'
  })

  const videos = document.querySelectorAll('iframe[src*=youtube]')
  for (const video of videos) {
    video.parentNode.classList.add('kg-embed-video')
  }
})

ready(async () => {
  const codeblocks = document.querySelectorAll('pre > code[class^="language-"]')
  for (const block of codeblocks) {
    const [, language] = Array.from(block.classList)[0].split('-')

    const code = (await highlighter).codeToHtml(block.innerText, language)

    block.parentNode.outerHTML = code
  }
})
