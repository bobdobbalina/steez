import { defineStore } from 'pinia';

export const useUIStateStore = defineStore('UIState', {
  state: () => ({
    headerHeight: 0,
    footerHeight: 0
  }),

  actions: {
    setHeaderHeight(height) {
      this.headerHeight = height;
    },

    setFooterHeight(height) {
      this.footerHeight = height;
    }
  },
})