<template>
  <div id="app" class="app">
    <Header />
    <NuxtPage class="page-content" />
    <!-- <Footer /> -->
  </div>
</template>

<script setup>

const varStore = useVariableConfigStore();

const variables = {};

variables.colorOptions = computed(() => varStore.variables.colors.options);
variables.typographyOptions = computed(() => varStore.variables.typography.options);
variables.spacingOptions = computed(() => varStore.variables.spacing.options);
variables.animationOptions = computed(() => varStore.variables.animation.options);
variables.bordersAndRadiusOptions = computed(() => varStore.variables.bordersAndRadius.options);
variables.focusOptions = computed(() => varStore.variables.focus.options);
variables.shadowsOptions = computed(() => varStore.variables.shadows.options);
variables.scrollbarsOptions = computed(() => varStore.variables.scrollbars.options);
variables.buttonsOptions = computed(() => varStore.variables.buttons.options);


async function setCustomProperties() {
  for (const options in variables) {
    if (Object.hasOwn(variables, options)) {
      variables[options].value.forEach(option => {
        // console.log('setting option: ', option.name, option.value);
        document.documentElement.style.setProperty(option.name, option.value);
      });
    }
  }
}

onMounted(() => {

  setCustomProperties();

  varStore.$subscribe((mutation, state) => {
    // console.log('mutating : ', mutation);
    if (mutation.events.key === 'options') {
      setCustomProperties();
    } else {
      document.documentElement.style.setProperty(mutation.events.target.name, mutation.events.target.value);
    }

  });
})
</script>

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