import { defineNuxtPlugin } from '#app'
import { createCache, provideStyleContext } from '@antdv-next/cssinjs'

function warnStaticCssConflict() {
  if (typeof document === 'undefined' || typeof getComputedStyle !== 'function' || !document.body) {
    return
  }

  const probe = document.createElement('div')
  probe.className = 'data-ant-cssinjs-cache-path'
  probe.style.position = 'fixed'
  probe.style.visibility = 'hidden'
  probe.style.top = '-9999px'
  document.body.appendChild(probe)

  const content = (getComputedStyle(probe).content || '')
    .replace(/^"/, '')
    .replace(/"$/, '')
    .trim()

  document.body.removeChild(probe)

  if (!content || content === 'none') {
    return
  }

  console.warn(
    '[antdv-next/nuxt] Detected static cache map from `antdv-next/dist/antd.css`. This conflicts with cssinjs runtime SSR/hydration in Nuxt and may cause missing or delayed component styles (e.g. checkbox/radio/rate). Remove `antdv-next/dist/antd.css` and keep only `antdv-next/dist/reset.css`.',
  )
}

export default defineNuxtPlugin(
  (nuxtApp) => {
    const cache = createCache()
    const ssrEvent = nuxtApp.ssrContext?.event

    provideStyleContext(nuxtApp.vueApp, {
      value: {
        cache,
        defaultCache: false,
        ...(ssrEvent ? { mock: 'server' as const } : {}),
      },
    } as never)

    if (ssrEvent) {
      ssrEvent.context.__antdvCssInJsCache = cache
    }
    else {
      const runCheck = () => {
        warnStaticCssConflict()
      }

      if (typeof nuxtApp.hook === 'function') {
        nuxtApp.hook('app:mounted', runCheck)
      }
      else {
        runCheck()
      }
    }
  },
)
