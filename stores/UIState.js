import { defineStore } from 'pinia';

export const useUIStateStore = defineStore('UIState', {
  state: () => ({
    headerHeight: '0px',
    footerHeight: '0px'
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