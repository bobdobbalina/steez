<template>
  <footer ref="footer" class="site-footer">
    <h3 class="header">footer out here</h3>
  </footer>
</template>

<script setup>
const footer = ref(null);
const UIState = useUIStateStore();

onMounted(() => {
  UIState.footerHeight = `${footer.value.clientHeight}px`;
})
</script>

<style lang="scss" scoped>
.site-footer {
  background-color: var(--color-neutral-1);
  padding: var(--spacing-sm) var(--spacing-base);
}

.header {
  margin-bottom: 0;
}
</style>