<template>
    <div class="top-header"></div>
    <div class="container-fluid grid grid-cols-3 place-content-around place-self-center py-5 px-60">
        <div class="left-section col-span-2">
            <div class="header mt-2">
                <PreviewDetail></PreviewDetail>
            </div>
            <div class="mt-20">            <PreviewTeach></PreviewTeach>
            </div>
            <div class="mt-5">            <PreviewCompanies></PreviewCompanies>
            </div>
            <div class="mt-5">            <PreviewContent></PreviewContent>
            </div>
            <div class="mt-5">            <PreviewInformation></PreviewInformation>
            </div>
            <div class="mt-5">            <PreviewOthers></PreviewOthers>
            </div>
            <div class="mt-5">            <PreviewBuys></PreviewBuys>
            </div>
            <div class="mt-5">            <PreviewTeacher></PreviewTeacher>
            </div>
            <div class="mt-5">            <PreviewCourseComment></PreviewCourseComment>
            </div>
            <div class="mt-5">            <PreviewOtherCourses></PreviewOtherCourses>
            </div>
        </div>
        <div class="right-section col-span-1 text-gray-700">
            burası right section olacak
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


export default {
    name: "PreviewPage",
    components: {
        PreviewOtherCourses,
        PreviewBuys,
        PreviewOthers,
        PreviewInformation,
        PreviewCompanies,
        PreviewContent,
        PreviewTeach,
        PreviewDetail,
        PreviewTeacher,
        PreviewCourseComment
    }

}
</script>
<style>


.top-header{
position: absolute ;
    width: 100%;
    height: 365px;
    background-color: #1c1d1f;
    z-index: -50;
}
</style>