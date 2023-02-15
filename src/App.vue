<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: "App",
  components: {
    AppHeader, 
    AppJumbotron,
    AppMain, 
    AppFooter
  }
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppJumbotron></AppJumbotron>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
</template>

<style lang="scss">
  @use './components/styles/general.scss' as *
</style>
