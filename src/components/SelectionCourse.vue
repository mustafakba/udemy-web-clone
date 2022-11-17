<template>
    <div class="container mx-auto mt-12 text-left items-center px-7 pb-32">
      <div class="comment-title ">
          <h2 class="title">Kapsamlı kurs seçkisi</h2>
          <div class="comment mt-3.5">Her ay yayınlanan yeni kurslarla 204.000 online video kurs arasından birini seçin</div>
      </div>
        <div class="lesson-list flex mt-5 ">
           <div @click="getLessonId(index)" v-for="(lesson,index) in lessons" :key="index" class="lesson mr-6 pl-1 hover:opacity-1 cursor-pointer">{{lesson.title}}</div>
        </div>
        <div class="card-container">
            <div class="card-container-title my-2">{{this.$store.state.lesson_name.title}}</div>
            <div style="max-width: 800px" class="card-container-paragraph my-2">
                {{this.$store.state.lesson_name.paragraph}}
            </div>
                <button type="button" class="card-button-item mt-5 mb-3 font-bold button-width flex-nowrap text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" data-v-facba978="">
                    {{ this.$store.state.lesson_name.button_title }}
                </button>
            <div class="lesson-cards flex">
                <LessonCard v-for="(n,index) in 5" :key="index">{{n}}</LessonCard>
            </div>
        </div>
    </div>
</template>

<script>
import LessonCard from "@/components/Shared/LessonCard";
export default {
    name: "SelectionCourse",
    components: {LessonCard},
    data(){
        return{
           lessons:[{title:"Python",id:0}, {title:"Excel",id:1}, {title:"Web Geliştirme",id:2}, {title:"JavaScript",id:3}, {title:"Veri Bilimi",id:4}, {title:"AWS Sertifikasyonu",id:5}, {title:"Çizim",id:6}],
        }
    },
    methods:{
        getLessonId(index){
            var title = this.lessons[index].title
            console.log(title)
            if(title=="Python"){
                console.log("store'a python gönderilecek şimdi")
                this.$store.dispatch("fillPython")

            }
            if(title=="Excel"){
                console.log("store'a Excel gönderilecek şimdi")
                this.$store.dispatch("fillExcell")
            }
            if(title=="Web Geliştirme"){
                console.log("store'a Web Geliştirme gönderilecek şimdi")
                this.$store.dispatch("fillWeb")

            }
            if(title=="JavaScript"){
                console.log("store'a JavaScript gönderilecek şimdi")
                this.$store.dispatch("fillJavascript")

            }
            if(title=="Veri Bilimi"){
                console.log("store'a Veri Bilimi gönderilecek şimdi")
                this.$store.dispatch("fillVeri")

            }
            if(title=="AWS Sertifikasyonu"){
                console.log("store'a AWS Sertifikasyonu gönderilecek şimdi")
                this.$store.dispatch("fillAWS")



            }
            if(title=="Çizim"){
                console.log("store'a Çizim gönderilecek şimdi")
                this.$store.dispatch("fillDraw")

            }
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
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -.5px;
    line-height: 40px;
    color: #1c1d1f;
    background-color: #ffffff;
}
.comment{
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
    opacity: .9;
    transition: .3s;
}
.lesson:hover{
    opacity: 1;
}
.card-container{
    border: 1px solid #D1D7DC;
    padding:32px;
    margin-top: 18px;
}
.card-container-title{
    font-weight: 700;
    font-size: 24px;
    letter-spacing: -.2px;
    height: 28.8px;
    line-height: 28.8px;
}
.card-container-paragraph{
    font-size: 16px;
    line-height: 22.4px;
    color: #1c1d1f;
    height: 67.2px;
    max-width: 800px;
    overflow: hidden;
}
.card-button-item{
    transition: .3s;
    font-weight: 700;
    color: #1c1d1f;
    display: flex;
    align-items: center;
    justify-content: center;
    border:1px solid #1c1d1f;
}
</style>