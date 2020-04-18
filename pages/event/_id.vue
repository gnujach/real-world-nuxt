<template>
    <div >
        <h1>Event #{{ id}}</h1>
        <h2>title: {{event.title}}</h2>
        <button @click="start">Set title</button>
        <p>{{mytitle}}</p>
    </div>
</template>

<script>
    // import axios from "axios"
    // import EventService from "@/services/EventService"
    import {mapState} from 'vuex'
    export default {
        head() {
            return {
                title: 'List event ' + this.id,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Content for event id: '  + this.id
                    }
                ]
            }
        },
        async fetch ({store, error, params}) {
            try {
                // const {data} = await EventService.getEvent(this.id)
                await store.dispatch('events/fetchEvent' , params.id)
                // this.event = data;
                // console.log(this.event)
            }
            catch (e) {
                console.log (`Error:`, e);
            }
        },
        computed: {
            id() {
                return this.$route.params.id
            },
            ...mapState({
                 event: state => state.events.event,
                 mytitle: state => state.events.title
            })
        },
        methods: {
            start() {
                console.log("pressed")
                try {
                    this.$store.dispatch('events/pushTitle', 'Inside')
                }
                catch (e) {
                    console.log(e)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>