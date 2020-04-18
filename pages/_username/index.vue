<template>
    <div>
        <h1> Hi: {{ username}}</h1>
    </div>
</template>

<script>
    export default {
        computed: {
            username() {
                return this.$route.params.username
                // return "yo"
            }
        }        
    }
</script>

<style lang="scss" scoped>

</style>