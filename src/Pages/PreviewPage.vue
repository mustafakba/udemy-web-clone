<template>
    <div class="top-header"></div>
    <div class="container-fluid grid grid-cols-3 place-content-around place-self-center py-5 px-60">
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
                <div class="course-img ">
                    <img src="https://picsum.photos/seed/picsum/400/250" alt="">
                </div>
                <div class="course-bottom-section px-6 bg-white py-4">
                    <span class="price font-extrabold ">₺429.99</span>
                    <div style="background-color: #8710D8" class="preview-button">
                        <PurpleButton :button_data="'Kursu Önizle'"></PurpleButton>
                    </div>
                    <span class="return-pay flex justify-center mx-auto text-gray-500 text-sm">30 Gün İçinde Para İade Garantisi</span>
                    <div class="course-content mt-6">
                        <h4 class="title font-extrabold">Bu kursun içeriği:</h4>
                        <div class="content">
                            <img src="../image/tv.svg" alt="">
                            <div class="explanation">33 saat uzunluğunda hazır video içeriği</div>
                        </div>
                        <div class="content">
                            <img src="../image/file.svg" alt="">
                            <div class="explanation">8 Makale</div>
                        </div>
                        <div class="content">
                            <img src="../image/download-file.svg" alt="">
                            <div class="explanation">72 İndirilebilir içerik</div>
                        </div>
                        <div class="content">
                            <img src="../image/infinity.svg" alt="">
                            <div class="explanation">Ömür bou tam erişim</div>
                        </div>
                        <div class="content">
                            <img src="../image/mobile.svg" alt="">
                            <div class="explanation">Mobile ve TV'den erişim</div>
                        </div>
                        <div class="content">
                            <img src="../image/cup.svg" alt="">
                            <div class="explanation">Bitirme sertifikası</div>
                        </div>
                        <div class="share-to-course flex items-center justify-between py-5">
                            <span class="underline font-bold text-sm">Paylaş</span>
                            <span class="underline font-bold text-sm">Bu kursu hediye et</span>
                            <span class="underline font-bold text-sm">Kupon uygula</span>
                        </div>
                    </div>
                    <div class="right-section-footer">
                        <h3 class="title font-extrabold mt-5 mb-3 text-lg">5 veya daha fazla kişiye mi eğitim veriyorsunuz?
                        </h3>
                        <p class="text-gray-700 mb-3">
                            Ekibinize Udemy'nin en iyi 19.000+ kursuna istedikleri zaman istedikleri yerden erişebilme imkanı sağlayın.
                        </p>
                        <TheButton :button_data="'Udemy Business ürününü deneyin'"></TheButton>
                    </div>
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
    }

}
</script>
<style scoped>

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
.content{
    display: flex;
    align-items: center;
    margin-top: 7px;
}
.content img{
    flex-shrink: 0;
    margin-right: 12px;

    width: 16px;
    height: 16px;
}
.explanation{
    color: #6a6f73;
}
.right-section-footer{
    border-top: 1px solid rgba(106, 111, 115, 0.3);
}
</style>