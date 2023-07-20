<template>
  <header ref="header" class="site-header">
    <h1 class="app-name">Styleguide Custom Properties Generator</h1>
    <div class="actions">
      <button class="button">Upload Styleguide</button>
      <button class="button">Download Styleguide</button>
    </div>
  </header>
</template>

<script setup>
const header = ref(null);
const UIState = useUIStateStore();

onMounted(() => {
  UIState.headerHeight = `${header.value.clientHeight}px`;
})
</script>

<style lang="scss" scoped>
.site-header {
  background-color: var(--color-neutral-1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-base);
}

.app-name {
  color: var(--color-primary);
  margin-bottom: 0;
}

.actions {
  display: flex;
  gap: var(--spacing-sm);
}
</style>