<template>
  <main @headerLoaded="setHeaderDimensions" class="main">
    <ConfigSidebar class="sidebar" />
    <div class="content">
      <HtmlKitchenSink />
    </div>
    <!-- <Output class="output" /> -->
  </main>
</template>

<script setup>
const UIState = useUIStateStore();
</script>

<style lang="scss" scoped>
.main {
  --header-height: v-bind('UIState.headerHeight');
  --footer-height: v-bind('UIState.footerHeight');
  --sidebar-width: 300px;

  display: flex;
}

.content {
  flex-grow: 1;
  padding: var(--spacing-base);
  height: calc(100vh - var(--header-height) - var(--footer-height));
  overflow: auto;
}

.sidebar,
.output {
  min-width: var(--sidebar-width);
  max-height: calc(100vh - var(--header-height) - var(--footer-height));
  overflow: auto;
}
</style>