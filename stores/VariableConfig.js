import { defineStore } from 'pinia';

const defaults = {
  colors: [
    { name: "--color-black", value: "#000000" },
    { name: "--color-white", value: "#FFFFFF" },
    { name: "--color-yellow", value: "#ffca30" },
    { name: "--color-red", value: "#e02045" },
    { name: "--color-green", value: "#4d967b" },

    { name: "--color-neutral-0", value: "var(--color-white)" },
    { name: "--color-neutral-1", value: "color-mix(in srgb, var(--color-black) 10%, var(--color-white))" },
    { name: "--color-neutral-2", value: "color-mix(in srgb, var(--color-black) 20%, var(--color-white))" },
    { name: "--color-neutral-3", value: "color-mix(in srgb, var(--color-black) 30%, var(--color-white))" },
    { name: "--color-neutral-4", value: "color-mix(in srgb, var(--color-black) 40%, var(--color-white))" },
    { name: "--color-neutral-5", value: "color-mix(in srgb, var(--color-black) 50%, var(--color-white))" },
    { name: "--color-neutral-6", value: "color-mix(in srgb, var(--color-black) 60%, var(--color-white))" },
    { name: "--color-neutral-7", value: "color-mix(in srgb, var(--color-black) 70%, var(--color-white))" },
    { name: "--color-neutral-8", value: "color-mix(in srgb, var(--color-black) 80%, var(--color-white))" },
    { name: "--color-neutral-9", value: "color-mix(in srgb, var(--color-black) 90%, var(--color-white))" },
    { name: "--color-neutral-10", value: "var(--color-black)" },

    { name: "--color-primary", value: "#5FC1F1" },
    { name: "--color-secondary", value: "#F15FF1" },

    { name: "--color-action", value: "var(--color-primary)" },
    { name: "--color-action-light", value: "color-mix(in srgb, var(--color-action) var(--light-percentage), var(--color-white))" },
    { name: "--color-action-contrast", value: "var(--color-white)" },

    { name: "--color-highlight", value: "var(--color-action)" },
    { name: "--color-highlight-light", value: "color-mix(in srgb, var(--color-highlight) var(--light-percentage), var(--color-white))" },
    { name: "--color-highlight-contrast", value: "var(--color-white)" },

    { name: "--color-success", value: "var(--color-green)" },
    { name: "--color-success-light", value: "color-mix(in srgb, var(--color-success) var(--light-percentage), var(--color-white))" },
    { name: "--color-success-contrast", value: "var(--color-action-contrast)" },

    { name: "--color-warning", value: "var(--color-yellow)" },
    { name: "--color-warning-light", value: "color-mix(in srgb, var(--color-warning) var(--light-percentage), var(--color-white))" },
    { name: "--color-warning-contrast", value: "var(--color-action-contrast)" },

    { name: "--color-error", value: "var(--color-red)" },
    { name: "--color-error-light", value: "color-mix(in srgb, var(--color-error) var(--light-percentage), var(--color-white))" },
    { name: "--color-error-contrast", value: "var(--color-action-contrast)" },

    { name: "--color-viewport-background", value: "var(--color-white)" },

    { name: "--color-text-primary", value: "var(--color-neutral-8)" },
    { name: "--color-text-secondary", value: "var(--color-neutral-6)" },
    { name: "--color-text-tertiary", value: "var(--color-secondarary)" },
    { name: "--color-text-body", value: "var(--color-text-primary)" },
  ],
  typography: [
    { name: "--font-primary-stack", value: "TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif" },
    { name: "--font-secondary-stack", value: "Arial, Helvetica Neue, Helvetica, sans-serif" },
    { name: "--font-tertiary-stack", value: "Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace" },
    { name: "--font-family", value: "var(--font-secondary-stack)" },
    { name: "--font-family-heading", value: "var(--font-family)" },
    { name: "--font-weight-thin", value: "100" },
    { name: "--font-weight-extra-light", value: "200" },
    { name: "--font-weight-light", value: "300" },
    { name: "--font-weight-normal", value: "400" },
    { name: "--font-weight-medium", value: "500" },
    { name: "--font-weight-semi-bold", value: "600" },
    { name: "--font-weight-bold", value: "700" },
    { name: "--font-weight-extra-bold", value: "800" },
    { name: "--font-weight-black", value: "900" },
    { name: "--font-size-base", value: "1em" },
    { name: "--font-size-display", value: "4.8em" },
    { name: "--font-size-h1", value: "3.6em" },
    { name: "--font-size-h2", value: "2.4em" },
    { name: "--font-size-h3", value: "1.6em" },
    { name: "--font-size-h4", value: "1.2em" },
    { name: "--font-size-h5", value: "1em" },
    { name: "--font-size-h6", value: "0.8em" },
    { name: "--font-size-body", value: "var(--font-size-base)" },
    { name: "--font-size-body-sm", value: "calc(var(--font-size-base) * 0.75)" },
    { name: "--font-size-body-lg", value: "calc(var(--font-size-base) * 1.25)" },
    { name: "--line-height-reset", value: "1" },
    { name: "--line-height-text", value: "1.5" },
    { name: "--line-height-heading", value: "1.25" },
  ],
  spacing: [
    { name: "--spacing-base", value: "2rem" },
    { name: "--spacing-xs", value: "calc(var(--spacing-base) * 0.25)" },
    { name: "--spacing-sm", value: "calc(var(--spacing-base) * 0.5)" },
    { name: "--spacing-md", value: "var(--spacing-base)" },
    { name: "--spacing-lg", value: "calc(var(--spacing-base) * 1.5)" },
    { name: "--spacing-xl", value: "calc(var(--spacing-base) * 2)" },
  ],
  animation: [
    { name: "--linear", value: "cubic-bezier(0.250, 0.250, 0.750, 0.750)", },
    { name: "--ease", value: "cubic-bezier(0.250, 0.100, 0.250, 1.000)", },
    { name: "--ease-in", value: "cubic-bezier(0.420, 0.000, 1.000, 1.000)", },
    { name: "--ease-out", value: "cubic-bezier(0.000, 0.000, 0.580, 1.000)", },
    { name: "--ease-in-out", value: "cubic-bezier(0.420, 0.000, 0.580, 1.000)", },
    { name: "--ease-in-quad", value: "cubic-bezier(0.550, 0.085, 0.680, 0.530)", },
    { name: "--ease-in-cubic", value: "cubic-bezier(0.550, 0.055, 0.675, 0.190)", },
    { name: "--ease-in-quart", value: "cubic-bezier(0.895, 0.030, 0.685, 0.220)", },
    { name: "--ease-in-quint", value: "cubic-bezier(0.755, 0.050, 0.855, 0.060)", },
    { name: "--ease-in-sine", value: "cubic-bezier(0.470, 0.000, 0.745, 0.715)", },
    { name: "--ease-in-expo", value: "cubic-bezier(0.950, 0.050, 0.795, 0.035)", },
    { name: "--ease-in-circ", value: "cubic-bezier(0.600, 0.040, 0.980, 0.335)", },
    { name: "--ease-in-back", value: "cubic-bezier(0.600, -0.280, 0.735, 0.045)", },
    { name: "--ease-out-quad", value: "cubic-bezier(0.250, 0.460, 0.450, 0.940)", },
    { name: "--ease-out-cubic", value: "cubic-bezier(0.215, 0.610, 0.355, 1.000)", },
    { name: "--ease-out-quart", value: "cubic-bezier(0.165, 0.840, 0.440, 1.000)", },
    { name: "--ease-out-quint", value: "cubic-bezier(0.230, 1.000, 0.320, 1.000)", },
    { name: "--ease-out-sine", value: "cubic-bezier(0.390, 0.575, 0.565, 1.000)", },
    { name: "--ease-out-expo", value: "cubic-bezier(0.190, 1.000, 0.220, 1.000)", },
    { name: "--ease-out-circ", value: "cubic-bezier(0.075, 0.820, 0.165, 1.000)", },
    { name: "--ease-out-back", value: "cubic-bezier(0.175, 0.885, 0.320, 1.275)", },
    { name: "--ease-in-out-quad", value: "cubic-bezier(0.455, 0.030, 0.515, 0.955)", },
    { name: "--ease-in-out-cubic", value: "cubic-bezier(0.645, 0.045, 0.355, 1.000)", },
    { name: "--ease-in-out-quart", value: "cubic-bezier(0.770, 0.000, 0.175, 1.000)", },
    { name: "--ease-in-out-quint", value: "cubic-bezier(0.860, 0.000, 0.070, 1.000)", },
    { name: "--ease-in-out-sine", value: "cubic-bezier(0.445, 0.050, 0.550, 0.950)", },
    { name: "--ease-in-out-expo", value: "cubic-bezier(1.000, 0.000, 0.000, 1.000)", },
    { name: "--ease-in-out-circ", value: "cubic-bezier(0.785, 0.135, 0.150, 0.860)", },
    { name: "--ease-in-out-back", value: "cubic-bezier(0.680, -0.550, 0.265, 1.550)", },
    { name: "--animation-duration", value: "0.5s", },
    { name: "--animation-duration-slow", value: "var(--animation-duration) * 2", },
    { name: "--animation-duration-fast", value: "var(--animation-duration) / 2", },
    { name: "--animation-timing", value: "var(--ease-out-cubic)", },
  ],
  bordersAndRadius: [
    { name: "--border-width", value: "1px" },
    { name: "--border-style", value: "solid" },
    { name: "--border-color", value: "var(--color-neutral-5, currentColor)" },
    { name: "--border", value: "var(--border-width) var(--border-style) var(--border-color)" },
    { name: "--border-radius", value: "0.5rem" },
  ],
  focus: [
    { name: "--focus-outline-width", value: "1px" },
    { name: "--focus-outline-offset", value: "2px" },
    { name: "--focus-outline", value: "var(--focus-outline-width) solid var(--color-action)" },
  ],
  shadows: [
    { name: "--elevation-1", value: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)" },
    { name: "--elevation-2", value: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)" },
    { name: "--elevation-3", value: "0px 3px 9px 3px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.3)" },
    { name: "--elevation-4", value: "0px 2px 14px 4px rgba(0, 0, 0, 0.15), 0px 2px 5px rgba(0, 0, 0, 0.3)" },
    { name: "--elevation-5", value: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" },
  ],
  scrollbars: [
    { name: "--scrollbar-width", value: "5px" },
  ],
  buttons: [
    { name: "--button-font-weight", value: "var(--font-weight-normal)" },
    { name: "--button-font-size", value: "var(--font-size-body)" },
  ]
}

export const useVariableConfigStore = defineStore('VariableConfig', {
  state: () => ({
    variables: {
      colors: {
        displayName: "Colors",
        previewComponent: "ColorPreview",
        sidebarComponent: "ColorInput",
        options: [...defaults.colors],
      },
      typography: {
        displayName: "Type",
        previewComponent: "TypePreview",
        sidebarComponent: "ValueInput",
        options: [...defaults.typography],
      },
      spacing: {
        displayName: "Spacing",
        previewComponent: "SpacingPreview",
        sidebarComponent: "ValueInput",
        options: [...defaults.spacing]
      },
      animation: {
        displayName: "Animation",
        previewComponent: "AnimationPreview",
        sidebarComponent: "ValueInput",
        options: [...defaults.animation]
      },
      bordersAndRadius: {
        displayName: "Borders and Radius",
        previewComponent: "BordersAndRadiusPreview",
        sidebarComponent: "ValueInput",
        options: [...defaults.bordersAndRadius]
      },
      focus: {
        displayName: "Focus (A11y)",
        previewComponent: "FocusPreview",
        sidebarComponent: "ValueInput",
        options: [...defaults.focus]
      },
      shadows: {
        displayName: "Shadows/Elevation",
        previewComponent: "ShadowsElevationPreview",
        sidebarComponent: "ValueInput",
        options: [...defaults.shadows]
      },
      scrollbars: {
        displayName: "Scrollbars",
        previewComponent: "ScrollbarsPreview",
        sidebarComponent: "ValueInput",
        options: [...defaults.scrollbars]
      },
      buttons: {
        displayName: "Buttons",
        previewComponent: "ButtonsPreview",
        sidebarComponent: "ValueInput",
        options: [...defaults.buttons]
      }
    }
  }),
  getters: {

  },
  actions: {
    async resetToDefaults() {
      console.log('resetting: ');

      for (const [key, value] of Object.entries(defaults)) {
        this.variables[key].options = [...value];
      }
    }
  },
  // persist: {
  //   storage: persistedState.localStorage,
  //   debug: true,
  // }
});