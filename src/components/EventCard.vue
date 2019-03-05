<template>
  <v-card class="mb-4">
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
      <v-btn flat :to="{ name: 'event-show', params: { id: event.id } }">
        Show Event
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: Object
  }
}
</script>

<style></style>
