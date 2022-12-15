<template>
    {{$route.params.name}} <br>
    {{this.$store.state.lesson_name}}
    <button @click="goHome">Go To HomePage</button>
</template>

<script>
import router from "@/router";

export default {
    name: "PreviewPage",

    methods:{

        goHome(){
            router.push('/')
        }
    }
}
</script>

<style scoped>

</style>