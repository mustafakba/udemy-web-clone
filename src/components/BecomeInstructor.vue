<template>
    <div class="container mt-20 flex justify-center items-center mx-auto grid lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1">
           <div class="instructor-img">
               <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="">
           </div>
        <div class="become-an-instructor flex-col  sm:ml-8 sm:mt-8">
            <h2 class="title">Eğitmen Olun</h2>
            <p class="content">Dünyanın dört bir yanından eğitmenler Udemy'de milyonlarca öğrenciye eğitim veriyor. Sevdiğiniz şeyleri öğretmeniz için gereken araçları ve yetkinlikleri sağlıyoruz.
            </p>
            <button
                type="button"
                class="education-button flex-nowrap text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Hemen eğitim vermeye başlayın.
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "becomeInstructor"
}
</script>

<style scoped>
.container{
width: 50%;
}
.instructor-img{
    max-width: 400px;
    margin: 0;
}
.instructor-img img{
   width: 100%;
    height: 100%;
}
.become-an-instructor{
    max-width: 400px;
    max-height: 400px;
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
.content{
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
.education-button{
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
.education-button:hover{
    opacity: 1;
    background-color: #1c1d1f;
}
</style>