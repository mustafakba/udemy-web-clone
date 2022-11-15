<template>
  <TheHeader></TheHeader>
    <TopSlide></TopSlide>
</template>

<script>
import TheHeader from "./components/Shared/TheHeader.vue";
import TopSlide from "@/components/TopSlide";

export default {
  name: "App",
  components: {
      TopSlide,
    TheHeader,
  },
};
</script>

<style>

</style>
