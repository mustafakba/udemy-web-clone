<template>
    <div class="top-header"></div>
    <div :class="{'dark-mode' : !opacity} " class="container-fluid grid grid-cols-3 place-content-around place-self-center py-5 px-60">
        <div class="left-section col-span-2">
            <div class="header mt-2">
                <PreviewDetail></PreviewDetail>
            </div>
            <div class="mt-20">
                <PreviewTeach></PreviewTeach>
            </div>
            <div class="mt-5">
                <PreviewCompanies></PreviewCompanies>
            </div>
            <div class="mt-5">
                <PreviewContent></PreviewContent>
            </div>
            <div class="mt-5">
                <PreviewInformation></PreviewInformation>
            </div>
            <div class="mt-5">
                <PreviewOthers></PreviewOthers>
            </div>
            <div class="mt-5">
                <PreviewBuys></PreviewBuys>
            </div>
            <div class="mt-5">
                <PreviewTeacher></PreviewTeacher>
            </div>
            <div class="mt-5">
                <PreviewCourseComment></PreviewCourseComment>
            </div>
            <div class="mt-5">
                <PreviewOtherCourses></PreviewOtherCourses>
            </div>
        </div>
        <div class="right-section col-span-1 text-gray-700 ml-12 mt-16 ">
            <div class="course-preview">
                <div class="course-img relative">
                    <img src="https://picsum.photos/400/250" alt="">
                    <div class="course-preview-button absolute top-0">
                        <div class="flex flex-col justify-center items-center">
                            <button type="button" @click="changeOpacity" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    class="play-button">
                                <img src="../image/play-video-black.svg" alt="">
                            </button>
                            <span
                                class="flex justify-center items-center text-white mt-4 font-bold">Bu kursu ??nizle</span>
                        </div>
                    </div>
                </div>
                <div class="course-bottom-section px-6 bg-white py-4">
                    <span class="price font-extrabold ">???429.99</span>
                    <div style="background-color: #8710D8" class="preview-button">
                        <PurpleButton :button_data="'Kursu ??nizle'"></PurpleButton>
                    </div>
                    <span class="return-pay flex justify-center mx-auto text-gray-500 text-sm">30 G??n ????inde Para ??ade Garantisi</span>
                    <div class="course-content mt-6">
                        <h4 class="title font-extrabold">Bu kursun i??eri??i:</h4>
                        <div class="content">
                            <img src="../image/tv.svg" alt="">
                            <div class="explanation">33 saat uzunlu??unda haz??r video i??eri??i</div>
                        </div>
                        <div class="content">
                            <img src="../image/file.svg" alt="">
                            <div class="explanation">8 Makale</div>
                        </div>
                        <div class="content">
                            <img src="../image/download-file.svg" alt="">
                            <div class="explanation">72 ??ndirilebilir i??erik</div>
                        </div>
                        <div class="content">
                            <img src="../image/infinity.svg" alt="">
                            <div class="explanation">??m??r bou tam eri??im</div>
                        </div>
                        <div class="content">
                            <img src="../image/mobile.svg" alt="">
                            <div class="explanation">Mobile ve TV'den eri??im</div>
                        </div>
                        <div class="content">
                            <img src="../image/cup.svg" alt="">
                            <div class="explanation">Bitirme sertifikas??</div>
                        </div>
                        <div class="share-to-course flex items-center justify-between py-5">
                            <span class="underline font-bold text-sm">Payla??</span>
                            <span class="underline font-bold text-sm">Bu kursu hediye et</span>
                            <span class="underline font-bold text-sm">Kupon uygula</span>
                        </div>
                    </div>
                    <div class="right-section-footer">
                        <h3 class="title font-extrabold mt-5 mb-3 text-lg">5 veya daha fazla ki??iye mi e??itim
                            veriyorsunuz?
                        </h3>
                        <p class="text-gray-700 mb-3">
                            Ekibinize Udemy'nin en iyi 19.000+ kursuna istedikleri zaman istedikleri yerden eri??ebilme
                            imkan?? sa??lay??n.
                        </p>
                        <TheButton :button_data="'Udemy Business ??r??n??n?? deneyin'"></TheButton>
                    </div>
                </div>

                <!--        Modal Ba??lan??g??         -->

                <!--        Modal Biti??             -->

            </div>
        </div>

    </div>
    <button type="button" class="px-6
                  py-2.5
                  bg-blue-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-blue-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out">
        Launch demo modal
    </button>
    <!-- Modal -->
    <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog relative w-auto pointer-events-none">
            <div
                class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div
                    class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                        Modal title</h5>
                    <button
                            @click="changeOpacity()"
                            type="button"
                            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body relative p-4">
                    Modal body text goes here.
                </div>
                <div
                    class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button type="button" class="px-6
                                          py-2.5
                                          bg-purple-600
                                          text-white
                                          font-medium
                                          text-xs
                                          leading-tight
                                          uppercase
                                          rounded
                                          shadow-md
                                          hover:bg-purple-700 hover:shadow-lg
                                          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
                                          active:bg-purple-800 active:shadow-lg
                                          transition
                                          duration-150
                                          ease-in-out" data-bs-dismiss="modal">Close
                    </button>
                    <button type="button" class="px-6
                                      py-2.5
                                      bg-blue-600
                                      text-white
                                      font-medium
                                      text-xs
                                      leading-tight
                                      uppercase
                                      rounded
                                      shadow-md
                                      hover:bg-blue-700 hover:shadow-lg
                                      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                      active:bg-blue-800 active:shadow-lg
                                      transition
                                      duration-150
                                      ease-in-out
                                      ml-1">Save changes
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import PreviewTeacher from "@/components/PreviewTeacher";
import PreviewDetail from "@/components/PreviewDetail";
import PreviewTeach from "@/components/PreviewTeach";
import PreviewContent from "@/components/PreviewContent";
import PreviewCompanies from "@/components/PreviewCompanies";
import PreviewInformation from "@/components/PreviewInformation";
import PreviewOthers from "@/components/PreviewOthers";
import PreviewBuys from "@/components/PreviewBuys";
import PreviewCourseComment from "@/components/PreviewCourseComment";
import PreviewOtherCourses from "@/components/PreviewOtherCourses";
import PurpleButton from "@/components/Shared/PurpleButton";
import TheButton from "@/components/Shared/TheButton";


export default {
    name: "PreviewPage",
    components: {
        TheButton,
        PurpleButton,
        PreviewOtherCourses,
        PreviewBuys,
        PreviewOthers,
        PreviewInformation,
        PreviewCompanies,
        PreviewContent,
        PreviewTeach,
        PreviewDetail,
        PreviewTeacher,
        PreviewCourseComment,
    },
    data(){
        return{
            opacity : 1,
        }
    },
    methods:{
        changeOpacity(){
            this.opacity = !this.opacity
            console.log(this.opacity)
        }
    }
}
</script>
<style scoped>
.dark-mode{
    z-index: 1100;
    background-color: #000;
    opacity: .6;
}
.course-bottom-section {
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);

}

.top-header {
    position: absolute;
    width: 100%;
    height: 365px;
    background-color: #1c1d1f;
    z-index: -50;
}

.price {
    font-size: 32px;
    color: #1c1d1f;
    letter-spacing: -.02px;
}

.content {
    display: flex;
    align-items: center;
    margin-top: 7px;
}

.content img {
    flex-shrink: 0;
    margin-right: 12px;

    width: 16px;
    height: 16px;
}

.explanation {
    color: #6a6f73;
}

.right-section-footer {
    border-top: 1px solid rgba(106, 111, 115, 0.3);
}

.course-preview-button {
    margin-top: 80px;
    margin-left: 120.5px;
}

.play-button {

    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: #FFffff;
    border-radius: 50%;
}

.play-button img {
    margin-left: 7px;
    width: 36px;
}
</style>