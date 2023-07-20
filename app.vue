<template>
  <div class="app">
    <Header />
    <NuxtPage class="page-content" />
    <Footer />
  </div>
</template>

<style lang="scss" >
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-content {
  flex-grow: 1;
}
</style>