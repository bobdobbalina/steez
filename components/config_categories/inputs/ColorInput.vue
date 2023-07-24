<template>
  <div class="form-group">
    <label :for="option.name" class="label">
      {{ option.name }}:
    </label>
    <div class="value-wrapper">
      <span class="chip" :style="{ 'background-color': option.value }"></span>
      <input class="value-input" @change="updateColor" inputType="text" :inputId="option.name" v-model="option.value" />
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  option: Object,
  required: true
})

</script>

<style lang="scss" scoped>
.form-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: calc(var(--spacing-base) / 4);
  width: 100%;
  font-size: var(--font-size-body-sm);
}

.value-wrapper {
  display: flex;
  align-items: center;
  flex-shrink: 1;
}

.label {
  display: inline-block;
  margin-bottom: 0;
  font-weight: var(--font-weight-normal);
  flex-shrink: 0;
  width: 50%;
}

.chip {
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-right: calc(var(--spacing-sm) / 2);
}

.value-input {
  margin-bottom: 0;
  font-family: var(--font-tertiary-stack);
  font-size: var(--font-size-body-sm);
  padding: calc(var(--spacing-sm) / 4);
  text-transform: uppercase;
}
</style>
