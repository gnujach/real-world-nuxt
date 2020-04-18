<template>
    <div>
        <h1>Product: {{ product }}</h1>
    </div>
</template>

<script>
    export default {
        computed: {
            product() {
                return this.$route.params.product
                // return "yo"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>