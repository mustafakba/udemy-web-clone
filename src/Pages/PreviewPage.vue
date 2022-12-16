<template>
    <div class="container grid place-items-center ">
        <div class="course-detail">
            <div class="title">{{capitalized($route.params.name)}}</div>
            <div class="course-inner">{{this.$store.state.lesson_name.title}}</div>
            <div class="course-paragraph">{{this.$store.state.lesson_name.paragraph}}</div>
            <div class="course-point flex items-center">
                <span style="color: #FFC784">{{this.$store.state.lesson_name.courses[0].rate}}</span>
                <span class="flex"><StarIcon v-for="i in 5" :key="i"></StarIcon></span>
                <span>{{this.$store.state.lesson_name.courses[0].vote}}</span>
            </div>
        </div>
    </div>
    <button @click="goHome">Go To HomePage</button>
</template>

<script>
import router from "@/router";
import StarIcon from "@/Icons/starIcon";

export default {
    name: "PreviewPage",
    components: {StarIcon},
    data(){
    },
    methods:{
        goHome(){
            router.push('/')
        },
        capitalized(name) {
            const capitalizedFirst = name[0].toUpperCase();
            const rest = name.slice(1);

            return capitalizedFirst + rest;
    }
}}
</script>

<style scoped>
.container{
    color: #F8F9FB;
    background-color:#1C1D1F;
    width: 100%;
}

</style>