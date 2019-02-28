<template>
  <v-container>
    <v-layout row>
      <h1 class="display-1 mb-3">Event Listing</h1>
    </v-layout>
    <v-layout row>
      <v-flex xs-12>
        <EventCard id="1" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EventCard from '../components/EventCard'

export default {
  components: {
    EventCard
  }
}
</script>
