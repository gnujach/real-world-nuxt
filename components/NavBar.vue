<template>
    <div>
        <div class="nav">
            <nuxt-link to="/" class="brand">Real World Events</nuxt-link>
        </div>
        <nav>
            <nuxt-link to="/list" >List</nuxt-link>
            <nuxt-link to="/event/create" >Create</nuxt-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
        
    }
</script>

<style lang="scss" scoped>

</style>