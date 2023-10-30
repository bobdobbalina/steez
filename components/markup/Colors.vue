<template>
  <div>

    <h2 class="h2" id="headings">Colors</h2>

    <h3 class="h3">Brand Colors</h3>
    <div class="chip-container brand">
      <div class="color-chip">
        <div class="label">primary</div>
      </div>
      <div class="color-chip">
        <div class="label">secondary</div>
      </div>
      <div class="color-chip">
        <div class="label">tertiary</div>
      </div>
    </div>

    <h3 class="h3">Neutrals</h3>
    <div class="chip-container neutrals">
      <div class="color-chip">
        <div class="label">white (0%)</div>
      </div>
      <div class="color-chip">
        <div class="label">10%</div>
      </div>
      <div class="color-chip">
        <div class="label">20%</div>
      </div>
      <div class="color-chip">
        <div class="label">30%</div>
      </div>
      <div class="color-chip">
        <div class="label">40%</div>
      </div>
      <div class="color-chip">
        <div class="label">50%</div>
      </div>
      <div class="color-chip">
        <div class="label">60%</div>
      </div>
      <div class="color-chip">
        <div class="label">70%</div>
      </div>
      <div class="color-chip">
        <div class="label">80%</div>
      </div>
      <div class="color-chip">
        <div class="label">90%</div>
      </div>
      <div class="color-chip">
        <div class="label">black (100%)</div>
      </div>
    </div>

    <h3 class="h3">UI Colors</h3>
    <div class="chip-container ui">
      <div class="color-chip">
        <div class="label">action</div>
      </div>
      <div class="color-chip">
        <div class="label">highlight</div>
      </div>
      <div class="color-chip">
        <div class="label">success</div>
      </div>
      <div class="color-chip">
        <div class="label">warning</div>
      </div>
      <div class="color-chip">
        <div class="label">error</div>
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
.chip-container {
  display: flex;
  margin-bottom: var(--spacing-md);

  .color-chip {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 1px solid var(--color-viewport-background);
    font-family: var(--font-tertiary-stack);
    text-align: center;
  }

  &.brand {
    .color-chip {
      &:nth-of-type(1) {
        background-color: var(--color-primary);
      }

      &:nth-of-type(2) {
        background-color: var(--color-secondary);
      }

      &:nth-of-type(3) {
        background-color: var(--color-tertiary);
      }
    }
  }

  &.neutrals {
    .color-chip {

      &:nth-of-type(1) {
        background-color: var(--color-neutral-0);
      }

      &:nth-of-type(2) {
        background-color: var(--color-neutral-1);
      }

      &:nth-of-type(3) {
        background-color: var(--color-neutral-2);
      }

      &:nth-of-type(4) {
        background-color: var(--color-neutral-3);
      }

      &:nth-of-type(5) {
        background-color: var(--color-neutral-4);
      }

      &:nth-of-type(6) {
        background-color: var(--color-neutral-5);
        color: var(--color-neutral-1)
      }

      &:nth-of-type(7) {
        background-color: var(--color-neutral-6);
        color: var(--color-neutral-1)
      }

      &:nth-of-type(8) {
        background-color: var(--color-neutral-7);
        color: var(--color-neutral-1)
      }

      &:nth-of-type(9) {
        background-color: var(--color-neutral-8);
        color: var(--color-neutral-1)
      }

      &:nth-of-type(10) {
        background-color: var(--color-neutral-9);
        color: var(--color-neutral-1)
      }

      &:nth-of-type(11) {
        background-color: var(--color-neutral-10);
        color: var(--color-neutral-1)
      }
    }
  }

  &.ui {
    .color-chip {
      &:nth-of-type(1) {
        background-color: var(--color-action);
      }

      &:nth-of-type(2) {
        background-color: var(--color-highlight);
      }

      &:nth-of-type(3) {
        background-color: var(--color-success);
      }

      &:nth-of-type(4) {
        background-color: var(--color-warning);
      }

      &:nth-of-type(5) {
        background-color: var(--color-error);
      }
    }
  }
}
</style>