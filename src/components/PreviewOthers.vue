<template>
 <div class="main-container grid grid-cols-3 px-60 mt-3 pb-10 ">
     <div class="other-courses grid col-span-2 ">
         <div class="title">Öğrencilerin kaydolduğu diğer kurslar</div>
         <div v-for="(course,index) in courseData" :key="index" class="course-container flex justify-evenly py-5">
             <div class="course-content flex items-center justify-center text-left">
                 <div :style="{ background: `url('${courseData[index].image}') no-repeat center` }" class="course-img w-20 h-20"></div>
                 <div class="course-extansion">
                    <div class="course-title">{{course.title}}</div>
                    <div class="hours flex whitespace-nowrap">Toplam {{ course.total_hour }} saat  · <span class="text-gray-700! font-light" style="white-space: nowrap">Güncellendi {{ course.last_updated }} </span></div>
                </div>
             </div>
             <div class="courses-values grid grid-cols-3 justify-center ml-5 ">
                 <div style="height: 18px;" class="course-rate flex mt-1 justify-center ">
                         <span class="flex items-center mr-1">{{course.rate}}</span>
                         <StarIcon class="flex items-center"></StarIcon>
                 </div>
                 <div style="height: 18px;" class="course-members mt-1 flex justify-center ">
                     <img  src="../image/users.svg" class="flex items-center mr-1" alt="">
                     <span class="flex items-center">{{course.bought}}</span>
                 </div>
                 <div style="height: 18px;" class="course-price ml-5 h-4 ">
                     <span class="h-4">{{course.price}}</span>
                 </div>
             </div>
             <div class="heart-button flex justify-end ml-6">
                 <span>Heart Button gelecek</span>
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
    data(){
        return{
            courseData : courseData,
        }
    },
    methods(){

    },

}
</script>

<style scoped>
.course-img{
    margin-right: 15px;
    width: 80px;
}
.course-title{
    font-weight: 700;
}
.title{
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.2px;
    line-height: 28.8px;
    color: #1c1d1f;
}
.hours{
    color: #1E6055;
    font-weight: 700;
    font-size: 16px;
}
.course-container{
    border-bottom: 1px solid #6a6f73;
}


</style>