<template>
    <div class="container  mx-auto text-left items-center px-7 pb-32">
        <h4 class="title">Öğrenciler şu anda bunları görüntülüyor:
        </h4>
            <Splide class="" :options="{ rewind: true, role:group,  breakpoints:{640:{type:'slide','gap':90}}}" data-splide='{"type":"loop","perPage":1, "gap":90}' >
                <SplideSlide class="flex justify-around" >
                    <div class="mr-3.5" v-for="(i,index) in this.$store.state.otherCourses.length" :key="index">
                        <div class="card cursor-pointer w-52 lg:w-60">
                            <div class="background-image w-full h-32 bg-center bg-no-repeat" :style="{ background: `url('${this.$store.state.otherCourses[index].image_url}')` }"></div>
                            <div class="course-comment"> {{this.$store.state.otherCourses[index].comment}}</div>
                            <div class="course-author mt-0.5 mb-0.5">{{this.$store.state.otherCourses[index].author}}</div>
                            <div class="flex items-center">
                                <span style="color: #B4690E; font-size: 16px; font-weight: 700" class="mr-1.5 rate_rating"> {{this.$store.state.otherCourses[index].rate}}</span>
                                <star-icon class="" v-for="(n,index) in 5" :key="index">{{n}}</star-icon>
                                <span style="color: #6a6f73; font-size: 12px;" class="ml-1.5 voted mb-0.5"></span>
                            </div>
                            <div class="price flex mt-1">
                                <div class="now-price">{{this.$store.state.otherCourses[index].price}}</div>
                                <div class="last-price ml-2 line-through">{{this.$store.state.otherCourses[index].last_price}}</div>
                            </div>
                            <div class="card-sticker">
                                <span class="card-sticker"> {{this.$store.state.otherCourses[index].sticker}}</span>
                            </div>
                        </div>
                    </div>

                </SplideSlide>

            </Splide>
    </div>

</template>

<script>
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import starIcon from "@/Icons/starIcon";

export default {
    name: "StudentsLook",
    components: {  Splide, SplideSlide,starIcon},
    created() {
        console.log(this.$store.state.otherCourses)
    }
}
</script>

<style scoped>
.container{
    height: 100%;

}
.title{
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -.2px;
        line-height: 28.8px;
        color: #1c1d1f;
        background-color: #ffffff;
}
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