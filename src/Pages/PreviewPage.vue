<template>
          <div class="">
                  <PreviewDetail ></PreviewDetail>
                  <PreviewTeach class="mt-5"></PreviewTeach>
              </div>

</template>

<script>

import PreviewDetail from "@/components/PreviewDetail";
import PreviewTeach from "@/components/PreviewTeach";

export default {
    name: "PreviewPage",
    components: {
        PreviewTeach,
        PreviewDetail,
    }

}
</script>
<style>
    .container2{
        min-width: 1390px;
        max-width: 2100px;
        color: #F8F9FB;

    }
</style>