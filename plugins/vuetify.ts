// plugins/vuetify.js
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints'

const light: ThemeDefinition = {
    dark: false,
    colors: {
        "primary": "#006689",
        "on-primary": "#ffffff",
        "primary-container": "#c3e8ff",
        "on-primary-container": "#001e2c",
        "secondary": "#4e616d",
        "on-secondary": "#ffffff",
        "secondary-container": "#d1e5f4",
        "on-secondary-container": "#091e28",
        "tertiary": "#605a7d",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#e6deff",
        "on-tertiary-container": "#1c1736",
        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#410002",
        //"background": "#ff00ff",
        "background": "#fbfcfe",
        "on-background": "#191c1e",
        "surface": "#fbfcfe",
        "on-surface": "#191c1e",
        "surface-variant": "#dce3e9",
        "on-surface-variant": "#41484d",
        "outline": "#71787d",
        "inverse-on-surface": "#f0f1f3",
        "inverse-surface": "#2e3133",
        "inverse-primary": "#79d1ff",
        "shadow": "#000000",
        "surface-tint": "#006689",
        "outline-variant": "#c0c7cd",
        "scrim": "#000000"
    }
}

const dark: ThemeDefinition = {
    dark: true,
    colors: {
        "primary": "#79d1ff",
        "on-primary": "#003549",
        "primary-container": "#004c68",
        "on-primary-container": "#c3e8ff",
        "secondary": "#b5c9d7",
        "on-secondary": "#20333d",
        "secondary-container": "#364955",
        "on-secondary-container": "#d1e5f4",
        "tertiary": "#cac1ea",
        "on-tertiary": "#312c4c",
        "tertiary-container": "#484264",
        "on-tertiary-container": "#e6deff",
        "error": "#ffb4ab",
        "error-container": "#93000a",
        "on-error": "#690005",
        "on-error-container": "#ffdad6",
        "background": "#191c1e",
        "on-background": "#e1e2e5",
        "surface": "#191c1e",
        "on-surface": "#e1e2e5",
        "surface-variant": "#41484d",
        "on-surface-variant": "#c0c7cd",
        "outline": "#8a9297",
        "inverse-on-surface": "#191c1e",
        "inverse-surface": "#e1e2e5",
        "inverse-primary": "#006689",
        "shadow": "#000000",
        "surface-tint": "#79d1ff",
        "outline-variant": "#41484d",
        "scrim": "#000000"
    }
}
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        blueprint: md3,
        components,
        directives,
        theme: {
            defaultTheme: "dark",
            themes: {
                light,
                dark
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})
