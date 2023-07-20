<template>
  <main @headerLoaded="setHeaderDimensions" class="main">
    <SidebarsConfigSidebar class="sidebar" />
    <HtmlKitchenSink class="content" />
    <SidebarsOutput class="output" />
  </main>
</template>

<script setup>
const UIState = useUIStateStore();
</script>

<style lang="scss" scoped>
.main {
  --sidebar-width: 300px;

  display: flex;
  justify-content: center;
}

.content {
  --header-height: v-bind('UIState.headerHeight');
  --footer-height: v-bind('UIState.footerHeight');

  flex-grow: 1;
  max-width: calc(100% - var(--sidebar-width) * 2);
  max-height: calc(100vh - var(--header-height) - var(--footer-height));
  overflow: auto;
}

.sidebar,
.output {
  width: var(--sidebar-width);
}
</style>