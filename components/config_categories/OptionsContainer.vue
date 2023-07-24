<template>
  <details ref="details" :open="isOpen">
    <summary>{{ title }}</summary>
    <div class="content">
      <slot />
    </div>
  </details>
</template>

<script setup>
const details = ref(null);

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

</script>

<style lang="scss" scoped>
summary {
  padding: var(--spacing-sm);
  border: var(--border);

  .nested & {
    padding: var(--spacing-sm) var(--spacing-base);
  }
}

.content {
  .padded & {
    padding: var(--spacing-sm);
  }
}
</style>