import EventService from '@/services/EventService'

export const namespaced = true

export const state = {
  events: [],
  event: {},
  totalEvents: 0
}

export const getters = {
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
}

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_TOTAL_EVENTS(state, totalEvents) {
    state.totalEvents = parseInt(totalEvents)
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}

export const actions = {
  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
  },
  fetchEvents({ commit }, { page, perPage }) {
    EventService.getEvents(page, perPage)
      .then(response => {
        commit('SET_EVENTS', response.data)
        commit('SET_TOTAL_EVENTS', response.headers['x-total-count'])
      })
      .catch(error => {
        console.log('There was an error: ' + error)
      })
  },
  fetchEvent({ commit, getters }, id) {
    let event = getters.getEventById(id)
    if (event) {
      commit('SET_EVENT', event)
    } else {
      EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data)
        })
        .catch(error => {
          console.error('There was an error:', error)
        })
    }
  }
}
