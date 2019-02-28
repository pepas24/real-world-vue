<template>
  <v-toolbar app flat>
    <v-toolbar-title class="headline">
      <span>VueTendee</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat :to="{ name: 'event-list' }" exact>List</v-btn>
      <v-btn flat :to="{ name: 'event-create' }" exact>Create</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
.v-toolbar__content {
  max-width: 620px;
  margin: auto;
}
</style>
