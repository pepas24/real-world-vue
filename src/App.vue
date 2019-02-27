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
        <v-btn flat :to="{ name: 'event-create' }" exact>Create</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <div style="margin-top: 80px">
      <router-view />
    </div>
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
