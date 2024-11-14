import { addComponent, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'lui-ui-local',
    configKey: 'luiUI',
  },
  setup(_options, nuxt) {
    const luiComponents = [
      'LuiAvatar',
      'LuiBadge',
      'LuiButton',
      'LuiCheckbox',
      'LuiMenuDropdown',
      'LuiMenuItem',
      'LuiInput',
      'LuiRadio',
      'LuiSelect',
      'LuiMultiSelect',
      'LuiOption',
      'LuiSwitch',
      'LuiTextarea',
      'LuiModal',
      'LuiTabGroup',
      'LuiTabButtons',
      'LuiTabButton',
      'LuiTabPanels',
      'LuiTabPanel',
      'LuiTag',
      'LuiPopover',
      'LuiSidebar',
    ]

    luiComponents.forEach((component) => {
      addComponent({
        name: component,
        export: component,
        filePath: '@lui-ui/lui-vue', // Adjust this path if necessary
      })
    })

    nuxt.options.vite.optimizeDeps = nuxt.options.vite.optimizeDeps || {}
    nuxt.options.vite.optimizeDeps.include = nuxt.options.vite.optimizeDeps.include || []
    nuxt.options.vite.optimizeDeps.include.push('@lui-ui/lui-vue')

    nuxt.options.build.transpile = nuxt.options.build.transpile || []
    nuxt.options.build.transpile.push('@lui-ui/lui-vue')
  },
})
