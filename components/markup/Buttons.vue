<template>
  <div>
    <h2 class="h2">Buttons</h2>
    <div class="button-container">

      <h4 class="h4">HTML Elements</h4>
      <div class="form-group">
        <button>Button</button>
        <input type="button" value="Input">
        <input type="submit" value="Submit">
        <input type="reset" value="Reset">
        <a href="#" role="button">a[role="button"]</a>
        <button class="text">button.text || button.link</button>
      </div>

      <h4 class="h4">Varients</h4>
      <div class="form-group">
        <button type="button" class="primary">Primary</button>
        <button type="button" class="secondary">Secondary</button>
        <button type="button" class="success">Success</button>
        <button type="button" class="error">Error</button>
        <button type="button" class="warning">Warning</button>
        <button type="button" class="info">Info</button>
        <button type="button" class="light">Light</button>
        <button type="button" class="dark">Dark</button>
      </div>

      <h4 class="h4">Outlines</h4>
      <div class="form-group">
        <button type="button" class="outline primary">Primary</button>
        <button type="button" class="outline secondary">Secondary</button>
        <button type="button" class="outline success">Success</button>
        <button type="button" class="outline error">Error</button>
        <button type="button" class="outline warning">Warning</button>
        <button type="button" class="outline info">Info</button>
        <button type="button" class="outline light">Light</button>
        <button type="button" class="outline dark">Dark</button>
      </div>

      <h4 class="h4">Sizes</h4>
      <div class="form-group">
        <button class="sm">Small</button>
        <button class="md">Medium (Default)</button>
        <button class="lg">Large</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>
.form-group {
  display: flex;
  gap: var(--spacing-sm);
  align-items: center;
}
</style>