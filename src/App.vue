<template>
  <TheHeader></TheHeader>
    <TopSlide></TopSlide>
    <SelectionCourse></SelectionCourse>
</template>

<script>
import TheHeader from "./components/Shared/TheHeader.vue";
import TopSlide from "@/components/TopSlide";
import SelectionCourse from "@/components/SelectionCourse";

export default {
  name: "App",
  components: {
      SelectionCourse,
      TopSlide,
    TheHeader,
  },
};
</script>

<style>

</style>
