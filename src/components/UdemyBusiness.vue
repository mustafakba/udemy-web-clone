<template>
    <div
        class="container mt-20 flex justify-center items-center mx-auto grid lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 ">
        <div class="become-an-instructor text-left mr-8 sm:ml-8 sm:mt-8">
            <div class="udemy-logo w-full">
                <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg" alt="">
            </div>
            <p class="content">Ekibiniz için en popüler 19.000+ Udemy kursuna sınırsız erişim elde edin. İşletme,
                teknoloji, tasarım ve daha birçok konuda eğitim alın ve yetkinliklerinizi geliştirin.
            </p>
            <button
                type="button"
                class="education-button flex-nowrap text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Udemy Business'i Edinin.
            </button>
        </div>
        <div class="instructor-img w-full ml-14 place-items-center ">
            <img src="https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg" alt="">
        </div>
    </div>
    <div
        class="container mt-20 flex justify-center items-center mx-auto grid lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1">
        <div class="instructor-img w-full mr-20">
            <img src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg" alt="">
        </div>

        <div class="become-an-instructor text-left ml-8 sm:ml-8 sm:mt-8">
            <h2 class="title">Eğitimle hayatınızı dönüştürün</h2>
            <p class="content">Dünya genelindeki öğrenciler yeni kariyerlere başlıyor, alanlarında kendilerini
                geliştiriyor ve hayatlarını zenginleştiriyor.
            </p>
            <button
                type="button"
                class="education-button flex-nowrap text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Nasıl olduğunu öğrenin.
            </button>
        </div>

    </div>
</template>

<script>
export default {
    name: "UdemyBusiness"
}
</script>

<style scoped>
.container {
    place-items: center;
    width: 60%;
}

.become-an-instructor {
    max-width: 400px;
    max-height: 400px;
}

.content {
    justify-content: center;
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    margin-top: 18px;
    font-size: 19px;
    line-height: 26.6px;
    color: #1c1d1f;
    letter-spacing: -.5px;
}
.title{
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -.5px;
    line-height: 40px;
    color: #1c1d1f;
    margin-bottom: 20px;
    font-family: "Times New Roman";
}

.education-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    opacity: .8;
    font-size: 16px;
    font-weight: 700;
    height: 48px;
    min-width: 80px;
}

.education-button:hover {
    opacity: 1;
    background-color: #1c1d1f;
}
</style>