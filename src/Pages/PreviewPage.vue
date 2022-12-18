<template>
    <PreviewDetail></PreviewDetail>
    <PreviewTeach class="mt-5"></PreviewTeach>
    <PreviewContent></PreviewContent>

</template>

<script>

import PreviewDetail from "@/components/PreviewDetail";
import PreviewTeach from "@/components/PreviewTeach";
import PreviewContent from "@/components/PreviewContent";

export default {
    name: "PreviewPage",
    components: {
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