<template>
    <div class="container justify-center items-center mx-auto">
        <h3 class="title">En Popüler Kategoriler</h3>
        <div class="flex items-center grid grid-cols-4 ">
            <div v-for="(categories,index) in populerCategories" :key="index" class="categories-card justify-center ">
                <div :style="{ background: `url('${populerCategories[index].courseBackgroundImg}')`}" style="width: 300px; height: 300px;" class="img-background w-max h-max ">
                </div>
                <div>{{populerCategories[index].courseId}}</div>
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
</style>