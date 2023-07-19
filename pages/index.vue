<template>
  <main class="main">
    <SidebarConfigSidebar class="sidebar" />
    <div class="content">
      <h1 class="h1">we out here</h1>
      <h2 class="bill">bill</h2>
    </div>
    <Output class="output" />
  </main>
</template>

<script setup>
console.log('we out here too: ');
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
}

.content {
  flex-grow: 1;
}

.sidebar,
.output {
  width: 300px;
}
</style>