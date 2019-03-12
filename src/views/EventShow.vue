<template>
  <v-container>
    <v-layout row>
      <h1 class="display-1 mb-3">{{ event.title }}</h1>
    </v-layout>

    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-flex xs12>
            <div class="subheading mb-2">
              Organized by {{ event.organizer ? event.organizer.name : '' }}
            </div>
            <div class="headline mb-2">{{ event.description }}</div>
            <v-divider class="mb-3"></v-divider>
            <div class="mb-2">
              <v-icon class="mr-2">location_on</v-icon>
              <span class="body-2">Location:</span> {{ event.location }}
            </div>
            <div class="mb-2">
              <v-icon class="mr-2">calendar_today</v-icon>
              <span class="body-2">Date:</span>
              {{ event.time }} on {{ event.date }}
            </div>
            <div class="mb-3">
              <v-icon class="mr-2">supervised_user_circle</v-icon>
              <span class="body-2">
                Attendees
                {{ event.attendees ? event.attendees.length : 0 }}
              </span>
              <ul>
                <li v-for="(attendee, index) in event.attendees" :key="index">
                  {{ attendee.name }}
                </li>
              </ul>
            </div>
            <v-divider class="mb-3"></v-divider>
            <div class="mb-2">
              Posted on <span class="body-2">{{ event.category }}</span>
            </div>
          </v-flex>
        </v-layout>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import EventService from '@/services/EventService'

export default {
  name: 'EventShow',
  props: ['id'],
  data() {
    return {
      event: {}
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data
      })
      .catch(error => {
        console.error('There was an error:', error)
      })
  }
}
</script>
