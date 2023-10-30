<template>
  <aside class="sidebar">
    <OptionsContainer title="Variables" is-open>

      <OptionsContainer v-for="category in store.variables" :key="category.displayName" :title="category.displayName" class="padded nested">
        <ul>
          <li v-for="option in category.options" :key="option.name" class="color-item">
            <ColorInput v-if="category.sidebarComponent === 'ColorInput'" :option="option" />
            <ValueInput v-if="category.sidebarComponent === 'ValueInput'" :option="option" />
          </li>
        </ul>
      </OptionsContainer>

    </OptionsContainer>
  </aside>
</template>

<script setup>
const store = useVariableConfigStore();
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: var(--color-neutral-1);
}

.color-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.chip {
  display: inline-block;
  width: 1em;
  height: 1em;
}

.value {
  text-transform: uppercase;
  font-family: var(--font-tertiary-stack);
}
</style>