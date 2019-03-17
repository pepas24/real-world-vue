<template>
  <v-container>
    <v-layout row>
      <h1 class="display-1 mb-3">Event Listing</h1>
    </v-layout>
    <v-layout row>
      <v-flex xs-12>
        <EventCard v-for="event in events" :key="event.id" :event="event" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EventCard from '../components/EventCard'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents')
  },
  computed: mapState(['events'])
}
</script>
