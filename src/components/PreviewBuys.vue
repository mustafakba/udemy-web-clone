<template>
    <div class="main-container grid grid-cols-3 px-60 py-5">
        <div class="for-border col-span-2">
            <h3 class="title mt-2">Bu Kurslarla Birlikte Satın Alınanlar</h3>
            <div v-for="(course,index) in 3" :key="index" class="course-container cursor-pointer flex justify-between my-3">
                <div class="content-container flex">
                    <div :style="{ background: `url('${courseData[index].image}') no-repeat center` }" class="course-img relative">
                    </div>
                    <div  v-if="courseData[index].image_plus" class="absolute plus-icon ">
                        <img class="p-4" src="../image/plus.svg" alt="">
                    </div>
                    <div class="course-content mt-1.5 ml-4">
                        <span class=" course-title">{{ courseData[index].title }}</span>
                        <div class="course-author text-lg">{{ courseData[index].author }}</div>
                        <div class="course-rate flex items-center">
                            <span style="color: #B4690E" class="course-rate font-semibold ">{{
                                    courseData[index].rate
                                }}</span>
                            <div class="flex items-center mb-1">
                                <StarIcon v-for="(star,index) in 5" :key="index"></StarIcon>
                            </div>
                            <div class="course-member text-xs text-grey ">({{ courseData[index].bought }})</div>
                        </div>
                        <div v-if="courseData[index].ticket"
                             class="course-ticket mt-2">{{ courseData[index].ticket }}
                        </div>
                    </div>
                </div>
                <div class="course-price mt-1 flex flex-col ">
                    <span class="new-price text-lg font-bold">
                        {{ courseData[index].price }}
                    </span>
                    <span class="last-price text-md text-right line-through text-grey">
                        {{ courseData[index].last_price }}
                    </span>
                </div>
            </div>
            <div class="bottom-section flex justify-between items-center">
                <span class="text-lg">Toplam : <span class="total-price text-lg font-extrabold"> ₺1.099,97</span></span>
                <button class="add-button">Tümünü sepete ekle</button>
            </div>
        </div>
    </div>
</template>

<script>
import courseData from "@/apis/otherCourses.json";
import StarIcon from "@/Icons/starIcon";

export default {
    name: "PreviewBuys",
    components: {StarIcon},
    data() {
        return {
            courseData: courseData,

        }
    }
}
</script>

<style scoped>
.title{
    font-size: 24px;
    color: #1c1d1f;
}
.add-button{
    font-size: 16px;
    font-weight: 700;
    height: 48px;
    background-color: #8710D8;
    padding: 10px;
    opacity: .9;
    color:#FFffff ;
}
.add-button:hover{
    opacity: 1;
}
.course-title {
    font-weight: 700;
}
.text-grey {
    color: #6a6f73;
}
.plus-icon{
    width: 60px;
    height: 60px;
    border: 1px solid #6a6f73;
    border-radius: 50%;
    margin-left:80px;
    margin-top: 125px;
    z-index: 6;
}

.course-ticket {
    display: inline-block;
    padding: 6px 8px;
    background-color: #ECEB98;
    color: #1c1d1f;
    font-size: 12px;
    font-weight: 700;
}

.course-author {
    font-weight: lighter;
    font-size: 13.5px;

}

.title {
    font-size: 24px;
    letter-spacing: -.2px;
    font-weight: 700;
    color: #1c1d1f;
}

.main-container {
    color: #1c1d1f;
}

.for-border {
    border: 1px solid #D1D7DC;
    padding: 17.5px 50px 25px 25px;
}

.course-img {
    width: 200px;
    height: 150px;
}
</style>