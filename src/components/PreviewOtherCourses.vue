<template>
    <div class="grid grid-cols-3  px-60 mt-3 pb-10">
        <div class="col-span-2 ">
            <div class="title mb-6"><span class="cursor-pointer" style="color: #401b9c!important;">Murat Hoca </span>Adlı Eğitmenin Diğer Kursları
            </div>
            <div class="card-container flex justify-between mb-4">
                <div v-for="(card,index) in 3" :key="index" class="card cursor-pointer">
                    <div class="background-image w-full h-32 bg-center bg-no-repeat"
                         :style="{ background: `url('${this.$store.state.lesson_name.courses[0].image_url}') no-repeat` }"></div>
                    <div class="course-comment  mt-2">{{ this.$store.state.lesson_name.courses[0].comment }}</div>
                    <div class="course-author mt-0.5 mb-0.5">{{ this.$store.state.lesson_name.courses[0].author }}</div>
                    <div class="flex items-center">
                    <span style="color: #B4690E; font-size: 16px; font-weight: 700"
                          class="mr-1.5 rate_rating">{{ this.$store.state.lesson_name.courses[0].rate }}</span>
                        <star-icon class="" v-for="(n,index) in 5" :key="index">{{ n }}</star-icon>
                        <span style="color: #6a6f73; font-size: 12px;"
                              class="ml-1.5 voted mb-0.5">({{ this.$store.state.lesson_name.courses[0].vote }})</span>
                    </div>
                    <div class="price flex mt-1">
                        <div class="now-price">{{ this.$store.state.lesson_name.courses[0].price }}</div>
                        <div class="last-price ml-2 line-through">
                            {{ this.$store.state.lesson_name.courses[0].last_price }}
                        </div>
                    </div>
                    <div class="card-sticker">
                        <span class="card-sticker">{{ this.$store.state.lesson_name.courses[0].sticker }} </span>
                    </div>
                </div>
            </div>
            <TheButton :button_data="`Kötüye kullanım bildir`"></TheButton>
        </div>
    </div>
</template>

<script>
import starIcon from "@/Icons/starIcon";
import TheButton from "@/components/Shared/TheButton";

export default {
    name: "PreviewOtherCourses",
    components: {TheButton, starIcon}

}
</script>

<style scoped>
.card-container{
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(106, 111, 115, 0.2);
}
.title{
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.2px;
    line-height: 28.8px;
    color: #1c1d1f;
}
.course-comment {
    font-weight: 700;
    letter-spacing: -.5px;
}
.course-author {
    font-size: 12px;
    color: #6a6f73;
}
.now-price {
    font-weight: 700;
    letter-spacing: -.5px;
    font-size: 16px;
}
.last-price {
    font-size: 16px;
    color: #6a6f73;
}
.card-sticker {
    margin-top: 12px;
}
.card-sticker span {
    color: #75862b;
    font-weight: 500;
    font-size: 12px;
    padding: 4px 8px;
    background-color: #eceb98;
}
</style>