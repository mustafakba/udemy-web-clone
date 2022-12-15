<template>
    <router-link custom v-slot="{navigation}"  :to="this.$store.state.lesson_name.url">
    <div @click="navigation" role="link"  class="card cursor-pointer">
        <div class="background-image w-full h-32 bg-center bg-no-repeat" style="background: " :style="{ background: `url('${this.$store.state.lesson_name.courses[0].image_url}') no-repeat` }"></div>
        <div class="course-comment">{{this.$store.state.lesson_name.courses[0].comment}}</div>
        <div class="course-author mt-0.5 mb-0.5">{{this.$store.state.lesson_name.courses[0].author}}</div>
        <div class="flex items-center">
            <span style="color: #B4690E; font-size: 16px; font-weight: 700" class="mr-1.5 rate_rating">{{this.$store.state.lesson_name.courses[0].rate}}</span>
            <star-icon class="" v-for="(n,index) in 5" :key="index">{{n}}</star-icon>
            <span style="color: #6a6f73; font-size: 12px;" class="ml-1.5 voted mb-0.5">({{this.$store.state.lesson_name.courses[0].vote}})</span>
        </div>
        <div class="price flex mt-1">
            <div class="now-price">{{this.$store.state.lesson_name.courses[0].price}}</div>
            <div class="last-price ml-2 line-through">{{this.$store.state.lesson_name.courses[0].last_price}}</div>
        </div>
        <div class="card-sticker">
            <span class="card-sticker">{{this.$store.state.lesson_name.courses[0].sticker}} </span>
        </div>
    </div>
    </router-link>

</template>

<script>
import starIcon from "@/Icons/starIcon";
export default {
    name: "LessonCard",
    components: {starIcon}
}
</script>

<style scoped>
.card{
    margin: 32px 8px 0px 8px;
}
.card:first-child{
    margin-left: 0px;
}
.card:last-child{
    margin-right: 0px;
}
.course-comment{
    font-weight: 700;
    letter-spacing: -.5px;
}
.course-author{
    font-size: 12px;
    color: #6a6f73;
}
.now-price{
    font-weight: 700;
    letter-spacing: -.5px;
    font-size: 16px;
}
.last-price{
    font-size: 16px;
    color: #6a6f73;
}
.card-sticker{
    margin-top: 12px;
}
.card-sticker span{
    color: #75862b;
    font-weight: 500;
    font-size: 12px;
    padding: 4px 8px;
    background-color: #eceb98;
}
</style>