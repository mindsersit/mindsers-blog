import { codeToHtml } from 'https://esm.sh/shiki@3.0.0'
import { ready } from './ready.js'

const isDark =
  window.matchMedia?.('(prefers-color-scheme: dark)').matches

ready(async () => {
  const images = document.querySelectorAll('.kg-gallery-image img')
  images.forEach((image) => {
    const container = image.closest('.kg-gallery-image')
    const width = image.attributes.width.value
    const height = image.attributes.height.value
    const ratio = width / height

    container.style.flex = `${ratio} 1 0%`
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
    const code = await codeToHtml(block.innerText, {lang : language, theme: isDark ? 'github-light' : 'github-dark'})

    block.parentNode.outerHTML = code
  }
})
