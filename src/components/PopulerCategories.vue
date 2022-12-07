<template>
    <div class="container justify-center items-center ml-4  md:mx-auto">
        <h3 class="title">En Popüler Kategoriler</h3>
        <div class="flex items-center grid grid-cols-4 place-content-start ">
            <div v-for="(categories,index) in populerCategories" :key="index" class="categories-card">
                <div class="course-img-container hidden md:block ">
                    <div :style="{ background: `url('${populerCategories[index].courseBackgroundImg}')`}"  class="card-img  cursor-pointer ">
                    </div>
                </div>
                <div style="font-size: 1rem ; line-height: 19.2px" class="course-name title cursor-pointer mr-2 md:mr-0">
                    <div class="border flex justify-center items-center md:block rounded-full py-1 h-12 border-black md:border-0 md:p-0 md:h-2 ">{{populerCategories[index].courseId}}</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "PopulerCategories",

    data() {
        return {
            populerCategories: [
                {
                    courseId: "Tasarım",
                    courseBackgroundImg : "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
                },
                {
                    courseId: "Yazılım",
                    courseBackgroundImg : "https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
                },
                {
                    courseId: "Pazarlama",
                    courseBackgroundImg : "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"
                },
                {
                    courseId: "BT ve Yazılım",
                    courseBackgroundImg : "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"
                },
                {
                    courseId: "Kişisel Gelişim ",
                    courseBackgroundImg : "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"
                },
                {
                    courseId: "İşletme ",
                    courseBackgroundImg : "https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"
                },
                {
                    courseId: "Fotoğrafçılık ",
                    courseBackgroundImg : "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
                },
                {
                    courseId: "Müzik ",
                    courseBackgroundImg : "https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
                },
            ]
        }
    }
}
</script>

<style scoped>
.container {
    height: 100%;
    max-width: 1339px;
}
.title{
    font-weight: 700;
    letter-spacing: -.2px;
    color: #1c1d1f;
    font-size: 24px;
    margin-bottom: 30px;
}
.course-name{
    margin-top: 7px;
    margin-bottom: 30px;
}
.categories-card{
}
.course-img-container{

}
.card-img{
    background-repeat: no-repeat;
    background-position: center;
    box-sizing: border-box;
    min-height: 300px;
    max-width: 300px;
    transition: .15s;

}
.card-img:hover{

    transform:  scale(105%);
}
</style>