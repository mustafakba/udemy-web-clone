<template>
    <div class="main-container">
        <div class="for-border ">
            <h3 class="title mb-2">Öğrenecekleriniz</h3>
            <div class="content-container grid grid-cols-2">
                <span v-for="(i,index) in this.$store.state.lesson_name.learnings" :key="index"
                      class="content mx-1 my-2 flex  ">
                    <img class="tick mr-4" src="../image/tick.svg" alt="">
                    <span>{{ this.$store.state.lesson_name.learnings[index] }}</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PreviewTeach"
}
</script>

<style scoped>
.title {
    font-size: 24px;
    letter-spacing: -.2px;
    font-weight: 700;
    color: #1c1d1f;
}

.main-container {
    color: #1c1d1f;
}

.tick {
    width: 20px;
    height: 24px;
}

.content {
    font-size: 14px;
    line-height: 19.5px;
    text-align: left;
    max-width: 450px;
    align-items: start;
}

.for-border {
    border: 1px solid #D1D7DC;
    padding: 17.5px 50px 25px 25px;


}
</style>