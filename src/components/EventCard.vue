<template>
  <v-card>
    <v-layout>
      <v-card-title primary-title>
        <v-flex>
          <div class="headline mb-2">{{ event.title }}</div>
          <div class="mb-2">
            <v-icon class="mr-2">calendar_today</v-icon>
            <span class="body-2">@{{ event.time }} on {{ event.date }}</span>
          </div>
          <div class="mb-2">
            <v-icon class="mr-2">supervised_user_circle</v-icon>
            <span>{{ event.attendees.length }} attending</span>
          </div>
        </v-flex>
      </v-card-title>
    </v-layout>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn flat :to="{ name: 'event-show', params: { id: id } }">
        Show Event
      </v-btn>
    </v-card-actions>
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
