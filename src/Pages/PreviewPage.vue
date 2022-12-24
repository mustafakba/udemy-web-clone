<template>
    <div class="left-section container-fluid grid grid-cols-3 px-60 pt-5 pb-10 ">
        <div class="col-span-2">
            <PreviewDetail></PreviewDetail>
            <PreviewTeach class="mt-5"></PreviewTeach>
            <PreviewCompanies></PreviewCompanies>
            <PreviewContent></PreviewContent>
            <PreviewInformation></PreviewInformation>
            <PreviewOthers></PreviewOthers>
            <PreviewBuys></PreviewBuys>
            <PreviewTeacher></PreviewTeacher>
            <PreviewCourseComment></PreviewCourseComment>
            <PreviewOtherCourses></PreviewOtherCourses>
        </div>
    </div>
    <div class="right-section col-span-1 text-gray-700black">
        burası right section olacak
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
.container2 {
    min-width: 1390px;
    max-width: 2100px;
    color: #F8F9FB;

}
</style>