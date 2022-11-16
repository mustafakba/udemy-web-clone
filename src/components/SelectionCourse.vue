<template>
    <div class="container mx-auto mt-12 text-left items-center px-7">
      <div class="comment-title ">
          <h2 class="title">Kapsamlı kurs seçkisi</h2>
          <div class="comment mt-3.5">Her ay yayınlanan yeni kurslarla 204.000 online video kurs arasından birini seçin</div>
      </div>
        <div class="lesson-list flex mt-5">
           <div @click="getState" v-for="(lesson,index) in lessons" :key="index" class="lesson mr-6 pl-1.5">{{lesson}}</div>
        </div>
    </div>
</template>

<script>

export default {
    name: "SelectionCourse",
    data(){
        return{
           lessons:["Python","Excel","Web Geliştirme","JavaScript","Veri Bilimi","AWS Sertifikasyonu","Çizim"],
        }
    },
    methods:{
        getState(){
           return console.log(this.$store.state.lesson_name)
        }
    }
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
.lesson{
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -.2px;
    line-height: 19.2px;
    text-align: center;
    color: #1c1d1f;
    opacity: .7;
    transition: .3s;
}
.lesson:hover{
    opacity: 1;

}
</style>