<template>
    <PreviewDetail></PreviewDetail>
    <PreviewTeach class="mt-5"></PreviewTeach>
    <PreviewCompanies></PreviewCompanies>
    <PreviewContent></PreviewContent>
    <PreviewInformation></PreviewInformation>
    <PreviewOthers></PreviewOthers>
</template>

<script>

import PreviewDetail from "@/components/PreviewDetail";
import PreviewTeach from "@/components/PreviewTeach";
import PreviewContent from "@/components/PreviewContent";
import PreviewCompanies from "@/components/PreviewCompanies";
import PreviewInformation from "@/components/PreviewInformation";
import PreviewOthers from "@/components/PreviewOthers";

export default {
    name: "PreviewPage",
    components: {
        PreviewOthers,
        PreviewInformation,
        PreviewCompanies,
        PreviewContent,
        PreviewTeach,
        PreviewDetail,
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