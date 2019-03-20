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
    <v-layout row justify-center>
      <v-pagination
        :value="page"
        @input="goToPage"
        @previous="page - 1"
        @next="page + 1"
        :length="pagination"
        circle
      ></v-pagination>
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
  data() {
    return {
      perPage: 3
    }
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      page: this.page,
      perPage: this.perPage
    })
  },
  methods: {
    goToPage(payload) {
      this.$router.push({ name: 'event-list', query: { page: payload } })
    }
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    pagination() {
      return parseInt((this.totalEvents / this.perPage).toFixed(0))
    },
    ...mapState(['events', 'totalEvents'])
  }
}
</script>
