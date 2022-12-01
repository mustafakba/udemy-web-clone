<template>
    <div class="container  mx-auto text-left items-center px-7 pb-32">
        <h4 class="title">Öğrenciler Şuan Bunları Da Görüntülüyor </h4>
            <Splide class="" :options="{ rewind: true }" data-splide='{"type":"loop","perPage":1, "gap":90}' >
                <SplideSlide class="flex justify-around" >
                    <LessonCard v-for="i in 5 " :key="i" class="w-56">
                    </LessonCard>
                </SplideSlide>

            </Splide>
    </div>

</template>

<script>
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import LessonCard from "@/components/Shared/LessonCard";

export default {
    name: "StudentsLook",
    components: { LessonCard, Splide, SplideSlide,}
}
</script>

<style scoped>
.container{
    height: 100%;
    max-width: 1339px;
    min-width: 1339px;
    align-items: center;
}
    .title{
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -.2px;
        line-height: 28.8px;
        color: #1c1d1f;
        background-color: #ffffff;
    }
</style>