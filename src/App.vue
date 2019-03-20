<template>
  <v-app>
    <NavBar />
    <router-view class="main-container" :key="$route.fullPath" />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      //
    }
  }
}
</script>

<style>
.main-container {
  max-width: 620px;
  margin-top: 68px;
  margin-left: auto;
  margin-right: auto;
}
</style>
