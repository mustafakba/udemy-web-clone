<template>
    <div class="container justify-center items-center mx-auto">
        <h3 class="title">En Popüler Kategoriler</h3>
        <div class="flex items-center grid grid-cols-4 ">
            <div v-for="(categories,index) in populerCategories" :key="index" class="categories-card justify-center">
                <div class="course-img-container w-max flex items-center justify-center" style="min-width:320px;min-height: 300px; max-width: 300px; max-height: 320px;">
                    <div :style="{ background: `url('${populerCategories[index].courseBackgroundImg}')`}"  class="card-img w-full h-full cursor-pointer ">
                    </div>
                </div>
                <div style="font-size: 1rem ; line-height: 19.2px" class="course-name title cursor-pointer">{{populerCategories[index].courseId}}</div>
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
                    courseId: "Yazılım Geliştirme",
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
    min-width: 1339px;
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
    max-width: 300px;
    max-height: 300px;
    background-color:#F8F9FB;

}
.card-img{
    background-repeat: no-repeat;
    background-position: center;
    box-sizing: border-box;
    min-height: 250px;
    max-width: 250px;
    max-height: 250px;
    transition: .15s;
    margin-right: 45px;
    margin-bottom: 45px;

}
.card-img:hover{

    transform:  scale(105%);
}
</style>