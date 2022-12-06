<template>
  <TheHeader></TheHeader>
    <TopSlide></TopSlide>
    <SelectionCourse></SelectionCourse>
    <StudentsLook></StudentsLook>
    <PopulerCategories></PopulerCategories>
    <TrendingTopics></TrendingTopics>
    <BecomeInstructor></BecomeInstructor>
    <TrustingTeams></TrustingTeams>
    <UdemyBusiness></UdemyBusiness>
</template>

<script>

import TheHeader from "./components/Shared/TheHeader.vue";
import TopSlide from "@/components/TopSlide";
import SelectionCourse from "@/components/SelectionCourse";
import StudentsLook from "@/components/StudentsLook";
import PopulerCategories from "@/components/PopulerCategories";
import TrendingTopics from "@/components/TrendingTopics"
import BecomeInstructor from "@/components/BecomeInstructor";
import TrustingTeams from "@/components/TrustingTeams";
import UdemyBusiness from "@/components/UdemyBusiness";
export default {
  name: "App",
  components: {
      UdemyBusiness,
      TrustingTeams,
      BecomeInstructor,
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
