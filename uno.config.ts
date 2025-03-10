import { defineConfig, presetIcons, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      scale: 1.2,
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default)
      }
    })
  ]
})