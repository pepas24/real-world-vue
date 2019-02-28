<template>
  <v-card>
    <v-layout>
      <v-card-title primary-title>
        <v-flex>
          <div class="headline">{{ event.title }}</div>
          <div>@{{ event.time }} on {{ event.date }}</div>
          <div>{{ event.attendees.length }} attending</div>
        </v-flex>
      </v-card-title>
    </v-layout>
    <v-divider></v-divider>
    <v-card-action>
      <v-btn flat :to="{ name: 'event-show', params: { id: id } }">
        Show Event
      </v-btn>
    </v-card-action>
  </v-card>
</template>

<script>
export default {
  name: 'EventCard',
  props: ['id'],
  data() {
    return {
      event: {
        title: 'Vue Component Styling',
        date: 'Tues Feb 28, 2019',
        time: '13:30',
        attendees: [
          {
            id: 'assf23124',
            name: 'Paul Smith'
          },
          {
            id: 'were34232',
            name: 'Nathaly Blade'
          },
          {
            id: 'trwe23452',
            name: 'Jake Auster'
          }
        ]
      }
    }
  }
}
</script>

<style></style>
