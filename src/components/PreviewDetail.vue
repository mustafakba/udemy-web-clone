<template>
    <div class="container-fluid ">
        <div class="course-detail  ">
            <span class="title blue-text">Yazılım > {{capitalized($route.params.name)}}</span>
            <div class="course-title my-3">{{this.$store.state.lesson_name.title}}</div>
            <div class="course-paragraph mt-3 mb-5">{{this.$store.state.lesson_name.paragraph}}</div>
            <div class="course-point flex items-center my-3">
                <span style="color: #FFC784">{{this.$store.state.lesson_name.courses[0].rate}}</span>
                <span class="flex ml-2 mr-2"><StarIcon v-for="i in 5" :key="i"></StarIcon></span>
                <span>{{this.$store.state.lesson_name.courses[0].vote}}</span>
            </div>
            <div class="course-author my-3">Oluşturan <span class="blue-text underline">{{this.$store.state.lesson_name.courses[0].author}}</span></div>
            <div class="last-update-date flex items-center">
                <span style="background: #F8F9FB ; width: 16px ;height: 16px;" class="rounded-full" ><img style="width: 16px ; " src="../../src/image/exclamation.svg" alt=""></span>
                <span class="ml-2">Son güncelleme tarihi: 07/2020</span>
                <span class="ml-2" style="background: #F8F9FB; border-radius: 50%">
                    <img width="16px;" src="../image/language.svg" alt="">
                </span>
                <span class="ml-2">Türkçe</span>
            </div>
        </div>

    </div>

</template>

<script>
import router from "@/router";
import StarIcon from "@/Icons/starIcon";

export default {
    name: "PreviewDetail",
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
.container-fluid{

    color: #F8F9FB;
    background-color:#1C1D1F;

;
}
.blue-text{
    color: #CEC0FC;
    cursor: pointer;
}
.course-title{
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -.2px;
    line-height: 38.4px;
    color: #Fff;

}
.course-paragraph{
    font-size: 17px;
    line-height: 26.6px;
    color: #fff;
    max-width: 600px;
}
.preview-box{
    position: absolute;
    top: 105px;
    right: 200px;
    width: 340px;
    background-color: yellow;
    height: 700px;
}
.preview-img{
    width: 100%;
    height: 100%;
    z-index: 15;
}
</style>