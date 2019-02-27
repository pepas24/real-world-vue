<template>
  <v-container>
    <v-layout row>
      <h1 class="display-1 mb-3">Event Listing</h1>
    </v-layout>
    <v-layout row>
      <v-flex xs-12>
        <v-card>
          <v-card-title primary-title>
            <div class="headline">Event #1</div>
          </v-card-title>
          <v-card-action>
            <v-btn flat :to="{ name: 'event-show', params: { id: '1' } }">
              Show Event
            </v-btn>
          </v-card-action>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
