<template>
  <div>
    <h1>{{title}}</h1>
    <div>
      <h1>List Events: {{events.length}} </h1>
      <EventCard v-for="(event, index) in events" :key="index" :event="event" :data-index="index" />
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard"
// import axios from "axios"
// import EventService from "@/services/EventService"
import {mapState} from 'vuex'
  export default {
    components: {
      EventCard
    },
    head() {
      return {
        title: 'Event manager site',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Contenido de la pagina o del sitio'
          }
        ]
      }
    },
    data: () => ({
           title: 'Title'
    }),
    async fetch({store, error}) {
      try {
        await store.dispatch('events/fetchEvents')
        // const { data } = await EventService.getEvents();
        // this.events = data
      }
      catch (e) {
        console.log(e);
      }
  },
  computed: mapState({
    events: state => state.events.events
  }),
  }
</script>

<style lang="scss" scoped>

</style>