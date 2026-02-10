import { defineNitroPlugin } from 'nitropack/runtime'

export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('render:html', (html, { event }) => {
    const styles = event.context.__antdvCssInJsStyles
    if (styles && styles.length > 0) {
      html.head.unshift(...styles)
    }
  })
})
