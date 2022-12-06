<template>
  <TheHeader></TheHeader>
    <TopSlide></TopSlide>
    <SelectionCourse></SelectionCourse>
    <StudentsLook></StudentsLook>
    <PopulerCategories></PopulerCategories>
    <TrendingTopics></TrendingTopics>
</template>

<script>

import TheHeader from "./components/Shared/TheHeader.vue";
import TopSlide from "@/components/TopSlide";
import SelectionCourse from "@/components/SelectionCourse";
import StudentsLook from "@/components/StudentsLook";
import PopulerCategories from "@/components/PopulerCategories";
import TrendingTopics from "@/components/TrendingTopics"
export default {
  name: "App",
  components: {
      PopulerCategories,
      StudentsLook,
      SelectionCourse,
      TopSlide,
      TrendingTopics,
    TheHeader,

  },
};
</script>

<style>
#app{
padding-bottom:250px;
}
</style>
