<template>
  <TheHeader></TheHeader>
    <TopSlide></TopSlide>
    <SelectionCourse></SelectionCourse>
    <StudentsLook></StudentsLook>
</template>

<script>

import TheHeader from "./components/Shared/TheHeader.vue";
import TopSlide from "@/components/TopSlide";
import SelectionCourse from "@/components/SelectionCourse";
import StudentsLook from "@/components/StudentsLook";
export default {
  name: "App",
  components: {
      StudentsLook,
      SelectionCourse,
      TopSlide,
    TheHeader,

  },
};
</script>

<style>
#app{
padding-bottom:250px;
}
</style>
