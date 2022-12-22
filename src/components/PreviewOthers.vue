<template>
    <div class="main-container grid grid-cols-3 px-60 mt-3 pb-10 ">
        <div class="other-courses grid col-span-2 ">
            <div class="title">Öğrencilerin kaydolduğu diğer kurslar</div>
            <div v-for="(course,index) in courseData" :key="index" class="course-container flex justify-between py-2.5">
                <div class="course-content flex items-center justify-center text-left">
                    <div :style="{ background: `url('${courseData[index].image}') no-repeat center` }"
                         class="course-img w-20 h-20"></div>
                    <div class="course-extansion">
                        <div class="course-title">{{ course.title }}</div>
                        <div class="hours flex ">Toplam {{ course.total_hour }} saat ·
                            <span class="ml-0.5 font-light" style="color: #6a6f73!important;">   Güncellendi {{course.last_updated }} </span></div>
                    </div>
                </div>
                <div style="height: 18px;" class="course-rate flex mt-1 ml-2 justify-center ">
                    <span class="flex items-center mr-1">{{ course.rate }}</span>
                    <StarIcon class="flex items-center"></StarIcon>
                </div>
                <div style="height: 18px;" class="course-members mt-1  ml-2 flex justify-end ">
                    <img src="../image/users.svg" class="flex items-center mr-1" alt="">
                    <span class="flex items-center">{{ course.bought }}</span>
                </div>
                <span class="h-4 font-bold">{{ course.price }}</span>
                <div class="heart-button">
                        <div class="p-3 border heart-button-container">
                            <img class="heart-svg" src="../image/heart.svg" alt="">
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import courseData from '../apis/courses.json'
import StarIcon from "@/Icons/starIcon";

export default {
    name: "PreviewOthers",
    components: {StarIcon},
    data() {
        return {
            courseData: courseData,
        }
    },
    methods() {

    },

}
</script>

<style scoped>
.course-img {
    margin-right: 15px;
    width: 80px;
}

.course-title {
    font-weight: 700;
}

.title {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.2px;
    line-height: 28.8px;
    color: #1c1d1f;
}
.heart-button-container{
    cursor: pointer;
    border: 1px solid #1c1d1f;
    border-radius: 50%;
    transition: .2s;
}
.heart-button-container:hover{
    background-color: rgba(106, 111, 115, 0.1);
}
.heart-svg{
    width: 25px;
    height: 25px;
}
.hours {
    color: #1E6055;
    font-weight: 700;
    font-size: 16px;
}

.course-content {
    max-width: 450px;
}

.course-container {
    border-bottom: 1px solid #6a6f73;
}


</style>