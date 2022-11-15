    <template>
        <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
            <SplideSlide>
                <img src="../image/top-carousel-1.jpg" alt="Sample 1">
            </SplideSlide>
            <SplideSlide>
                <img src="../image/top-2-carousel.jpg" alt="Sample 1">
            </SplideSlide>
        </Splide>
    </template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
    name: "TopSlide",
    components: {
        Splide,
        SplideSlide,
    },

}
</script>

<style scoped>

</style>