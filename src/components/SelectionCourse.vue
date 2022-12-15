<template>
    <div class="container mx-auto mt-12 text-left items-center px-7 mb-16">
      <div class="comment-title ">
          <h2 class="title">Kapsamlı kurs seçkisi</h2>
          <div class="comment mt-3.5">Her ay yayınlanan yeni kurslarla 204.000 online video kurs arasından birini seçin</div>
      </div>
        <div class="lesson-list mt-5 grid lg:flex">
           <div @click="getLessonId(index)" v-for="(lesson,index) in lessons" :key="index" class="lesson mr-6 mb-2 pl-1 hover:opacity-1 cursor-pointer">{{lesson.title}}</div>
        </div>
        <div class="card-container">
            <div class="card-container-title my-2 hidden lg:block">{{this.$store.state.lesson_name.title}}</div>
            <div style="max-width: 800px" class="card-container-paragraph hidden lg:block my-2">
                {{this.$store.state.lesson_name.paragraph}}
            </div>
            <button type="button" class="card-button-item hidden lg:flex lg:items-center lg:justify-center  mt-5 mb-3 font-bold button-width flex-nowrap text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" data-v-facba978="">
                {{ this.$store.state.lesson_name.button_title }}
            </button>
            <Splide  v-if="!this.$store.state.checkAWS" :options="{ rewind: true, breakpoints:{640:{perPage:1,gap:'1rem',},480:{perPage:1,gap:'.7rem'}}}" aria-label="My Favorite Images">
                <SplideSlide>
                    <div v-if="!this.$store.state.checkAWS" class="lesson-cards flex">
                        <LessonCard v-for="(n,index) in 5" :key="index">{{n}}</LessonCard>
                    </div>
                </SplideSlide>
            </Splide>
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
            this.$store.state.checkAWS = false;
            var title = this.lessons[index].title
            console.log(title)
            if(title=="Python"){
                this.$store.dispatch("fillPython")

            }
            if(title=="Excel"){
                this.$store.dispatch("fillExcell")


            }
            if(title=="Web Geliştirme"){
                this.$store.dispatch("fillWeb")


            }
            if(title=="JavaScript"){
                this.$store.dispatch("fillJavascript")

            }
            if(title=="Veri Bilimi"){
                this.$store.dispatch("fillVeri")

            }
            if(title=="AWS Sertifikasyonu"){
                this.$store.dispatch("fillAWS")
                this.$store.state.checkAWS=true;

            }
            if(title=="Çizim"){
                this.$store.dispatch("fillDraw")
            }
        }
    }
}
</script>

<style scoped>
.container{
    height: 100%;
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
    border:1px solid #1c1d1f;
}
</style>