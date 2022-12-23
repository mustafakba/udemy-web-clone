<template>
    <div class="main-container grid grid-cols-3 px-60 py-5">
        <div class="col-span-2">
            <div class="top-section flex items-center">
                <div class="mt-1">
                    <LittleStarIcon></LittleStarIcon>
                </div>
                <span class="top-section-span mx-2.5">4,6 kurs puanı</span>
                <span style="font-size: 60px; margin-top: 12.5px"> · </span>
                <span class="top-section-span mx-2.5">56K puan</span>
            </div>
            <div class="comment-container grid grid-cols-2">
                <div v-for="(course,index) in courseComment " :key="index" class="comment py-3 mb-4 mr-8">
                    <div class="comment-top-section flex justify-between mt-2">
                        <div class="name-point flex">
                           <span class="first-letter"> {{ courseComment[index].author_first_letter }}</span>
                            <div class="right-section ml-5">
                                <div class="course-author my-0.5 font-semibold">{{ courseComment[index].author }}</div>
                                <div class="rate-date flex">
                            <span class="little-star-icon" v-for="(item,index) in 5" :key="index">
                                <LittleStarIcon></LittleStarIcon>
                            </span>
                                    <span class="ml-4">{{ courseComment[index].date }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="three-dots flex">
                            <img src="../image/three-dot.svg" alt="">
                        </div>
                    </div>
                    <div class="course-comment mt-8">
                        <div>{{courseComment[index].comment}}</div>
                    </div>
                    <div class="comment-bottom-section text-sm text-gray-700 flex items-center mt-8">
                        <span>Faydalı buldunuz mu ? </span>
                        <div class="icons flex ml-4">
                            <img class="w-5 mr-5 cursor-pointer" src="../image/like.svg" alt="">
                            <img class="w-5 cursor-pointer" src="../image/dislike.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LittleStarIcon from "@/Icons/starIcon";
import courseComment from '../apis/courseComment.json'

export default {
    name: "PreviewCourseComment",
    components: { LittleStarIcon},
    data() {
        return {
            courseComment,
        }
    }
}
</script>

<style scoped>
.first-letter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #1c1d1f;
    color: #fff;
    padding: 10px;
    border-radius: 50%;
}

.little-star-icon {
    width: 10px;
    height: 5px;
    margin-right: 5px;
}
.star-icon{

}

.top-section-span {
    color: #1c1d1f;
    font-size: 24px;
    font-weight: 700;
    height: 28.8px;
    letter-spacing: -0.2px;
}
.comment{
    font-size: 16px;
    line-height: 22.4px;
    color: #1c1d1f;
    border-top: 1px solid rgba(106, 111, 115, 0.22);

}
</style>