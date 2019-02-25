<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat :to="{ name: 'event-list' }" exact>Event List</v-btn>
        <v-btn flat :to="{ name: 'event-show' }">Event show</v-btn>
        <v-btn flat :to="{ name: 'event-create' }">Create</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-layout py-5 px-3>
        <router-view />
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      //
    }
  }
}
</script>

<style>
.main-container {
  padding: 30px;
}
</style>
