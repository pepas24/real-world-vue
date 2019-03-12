<template>
  <v-container>
    <v-layout row>
      <h1 class="display-1 mb-3">Create an Event</h1>
    </v-layout>

    <v-card class="py-4 px-4">
      <v-form @submit.prevent="createEvent">
        <v-layout row wrap>
          <v-flex xs12>
            <h3 class="subheading mb-2">Name and Describe your event</h3>
            <v-text-field
              label="Name your Event"
              v-model="event.title"
              required
              outline
              full-width
            ></v-text-field>
            <v-textarea
              label="Description"
              v-model="event.description"
              required
              outline
            ></v-textarea>
            <v-select
              label="Select a category"
              v-model="event.category"
              :items="categories"
              outline
            ></v-select>

            <h3 class="subheading mb-2">Where is your event?</h3>
            <v-text-field
              label="Set a Location"
              v-model="event.location"
              required
              outline
              full-width
            ></v-text-field>

            <h3 class="subheading mb-2">When is your envent?</h3>
            <v-menu
              ref="menuDatePicker"
              v-model="datePicker"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="event.date"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="event.date"
                  label="Picker in menu"
                  readonly
                  v-on="on"
                  outline
                ></v-text-field>
              </template>
              <v-date-picker v-model="event.date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="datePicker = false">
                  Cancel
                </v-btn>
                <v-btn
                  flat
                  color="primary"
                  @click="$refs.menuDatePicker.save(event.date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
            <v-menu
              ref="menuTimePicker"
              v-model="timePicker"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="event.time"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="event.time"
                  label="Select an hour"
                  readonly
                  v-on="on"
                  outline
                ></v-text-field>
              </template>
              <v-time-picker v-if="timePicker" v-model="event.time" full-width>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="timePicker = false">
                  Cancel
                </v-btn>
                <v-btn
                  flat
                  color="primary"
                  @click="$refs.menuTimePicker.save(event.time)"
                >
                  OK
                </v-btn>
              </v-time-picker>
            </v-menu>

            <v-btn class="my-0 mx-0" color="primary" flat large type="submit">
              Create event
            </v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'EventCreate',
  data() {
    return {
      datePicker: false,
      timePicker: false,
      event: this.createFreshEventObject(),
      categories: this.$store.state.categories
    }
  },
  methods: {
    createEvent() {
      this.$store.dispatch('createEvent', this.event).then(() => {
        this.$router.push({
          name: 'event-show',
          params: { id: this.event.id }
        })
        this.event = this.createFreshEventObject()
      })
    },
    createFreshEventObject() {
      const user = this.$store.state.user
      const eventId = Math.floor(Math.random() * 1000000)

      return {
        id: eventId,
        user: user,
        organizer: user,
        title: '',
        description: '',
        category: '',
        location: '',
        date: new Date().toISOString().substr(0, 10),
        time: '',
        attendees: []
      }
    }
  }
}
</script>
