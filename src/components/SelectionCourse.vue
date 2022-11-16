<template>
    <div class="container mx-auto mt-12 text-left items-center px-7">
      <div class="comment-title ">
          <h2 class="title">Kapsamlı kurs seçkisi</h2>
          <div class="comment mt-3.5">Her ay yayınlanan yeni kurslarla 204.000 online video kurs arasından birini seçin</div>
      </div>
    </div>
</template>

<script>
export default {
    name: "SelectionCourse"
}
</script>

<style scoped>
.container{
    height: 100%;
    max-width: 1339px;
    min-width: 1339px;
    align-items: center;
}
.title{
    font-family: "Times New Roman";
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -.5px;
    line-height: 40px;
    color: #1c1d1f;
    background-color: #ffffff;
}
.comment{
    font-family: "Roboto Light";
    font-size: 19px;
    line-height: 26.6px;
    text-decoration: none solid rgb(28,29,31);
}
</style>