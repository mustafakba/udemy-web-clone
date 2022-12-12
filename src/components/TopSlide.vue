<template>
    <div class="container mx-auto">
        <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
            <SplideSlide>
                <div class="absolute card px-8 splide-img hidden lg:block">
                    <h2 class="mt-5 strong-text">Sizi anlayan öğrenim deneyimi</h2>
                    <p class="mb-6 mt-2 text">Bugününüz (ve geleceğiniz) için yetkinlikler. Hemen platformumuzda öğrenmeye başlayın.</p>
                </div>
                <img class="splide__list relative  splide-img " src="../image/top-carousel-1.jpg" alt="Sample 1">
            </SplideSlide>
            <SplideSlide>
                <div class="absolute card2 px-8 mt-5 hidden lg:block">
                    <h2 class="mt-4 strong-text">Çalışanlarınızın gücünü açığa çıkarın
                    </h2>
                    <p class="mt-4 text">Dünyanın dört bir yanından 12.500'den fazla şirket Udemy Business'a güveniyor. <span class="text-blue-500 underline cursor-pointer">Şirketiniz için neler yapabileceğimizi keşfedin. </span>
                    </p>
                </div>
                <img class="splide__list" src="../image/top-2-carousel.jpg" alt="Sample 1">
            </SplideSlide>
        </Splide>
        <div class="mobile-exp-container mx-auto px-3.5 flex flex-col justify-center mt-5 lg:hidden">
            <h3 class="mobile-title">Yılbaşı döneminde öğrenmeye zaman ayırın.</h3>
            <p class="mobile-paragraph">Kurslar şimdi yalnızca ₺69,99'den başlayan fiyatlarla! 15 Aralık'a kadar GIFT15 kodunu kullanarak indirimli fiyat üzerinden ekstra %15 indirimden yararlanın.</p>
            <div class="search-box relative flex">
                    <input type="text" placeholder="Ne öğrenmek isterseniz ?">
                    <img class="search-icon absolute" src="../image/search.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import {Splide, SplideSlide} from '@splidejs/vue-splide';

export default {
    name: "TopSlide",
    components: {
        Splide,
        SplideSlide,
    },

}
</script>

<style scoped>
.container {
    align-items: center;
}
.card {
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
    background-color: #ffffff;
    height: 180px;
    width: 450px;
    top: 65px;
    left: 70px;
    z-index: 2;
}
.card2{
    top: 50px;
    left: 70px;
    z-index: 2;
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
    background-color: #ffffff;
    height: 210px;
    width: 450px;
}
.splide-img{
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
    height: auto;
}
h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: -.5px;
}
.mobile-title{
    font-weight: 700;
    font-size: 24px;
    letter-spacing: -1.5px;
    margin: 0;
    padding: 0;
    font-family: Georgia;

}
.mobile-paragraph{
    font-size: 14px;
    line-height: 20px;
    max-width: 95%;
    margin-top: 5px;
    color: #1c1d1f;
    font-weight: 400;
    letter-spacing: -0.2px;
}

.search-box input{
    border: 1px solid ;
    padding: 8px;
    margin-top: 15px;
    width: 94%;
    height: 42.5px;
    transition: .3s ease-in-out;
}
.search-box input:focus{
}
.search-icon{
  width: 16px;
    height: 16px;
    top: 28px;
    right: 35px;
}
</style>