<template>
  <header ref="header" class="site-header">
    <h1 class="app-name">STEEZ: <small class="small">Your Custom Properties Combobulator</small></h1>
    <div class="actions">
      <button @click="variableStore?.resetToDefaults()" class="button inverse">Reset to default</button>
      <button class="button">Download CSS</button>
    </div>
  </header>
</template>

<script setup>
const header = ref(null);
const UIState = useUIStateStore();
const variableStore = useVariableConfigStore()

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
  padding: var(--spacing-sm) var(--spacing-base);
}

.app-name {
  color: var(--color-primary);
  margin-bottom: 0;
}

.actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}
</style>