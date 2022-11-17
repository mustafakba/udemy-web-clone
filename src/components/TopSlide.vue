<template>
    <div class="container flex mx-auto">
        <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
            <SplideSlide>
                <div class="absolute card px-8 splide-img">
                    <h2 class="mt-5 strong-text">Sizi anlayan öğrenim deneyimi</h2>
                    <p class="mb-6 mt-2 text">Bugününüz (ve geleceğiniz) için yetkinlikler. Hemen platformumuzda öğrenmeye başlayın.</p>
                </div>
                <img class="splide__list relative  splide-img " src="../image/top-carousel-1.jpg" alt="Sample 1">
            </SplideSlide>
            <SplideSlide>
                <div class="absolute card2 px-8 mt-5">
                    <h2 class="mt-4 strong-text">Çalışanlarınızın gücünü açığa çıkarın
                    </h2>
                    <p class="mt-4 text">Dünyanın dört bir yanından 12.500'den fazla şirket Udemy Business'a güveniyor. <span class="text-blue-500 underline cursor-pointer">Şirketiniz için neler yapabileceğimizi keşfedin. </span>
                    </p>
                </div>
                <img class="splide__list" src="../image/top-2-carousel.jpg" alt="Sample 1">
            </SplideSlide>
        </Splide>
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
    max-width: 1339px;
    min-width: 1339px;
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
}
h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: -.5px;
}


</style>