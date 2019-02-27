<template>
  <v-container>
    <v-layout row>
      <h1 class="display-1 mb-3">Showing Event #{{ id }}</h1>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id']
}
</script>
