<template>
    <HeaderSection></HeaderSection>
    <TopSlide></TopSlide>
    <SelectionCourse></SelectionCourse>
    <StudentsLook></StudentsLook>
    <PopulerCategories></PopulerCategories>
    <TrendingTopics></TrendingTopics>
    <BecomeInstructor></BecomeInstructor>
    <TrustingTeams></TrustingTeams>
    <UdemyBusiness></UdemyBusiness>
    <TheFooter></TheFooter>
</template>

<script>
import HeaderSection from "@/components/Shared/HeaderSection";
import TopSlide from "@/components/TopSlide";
import SelectionCourse from "@/components/SelectionCourse";
import StudentsLook from "@/components/StudentsLook";
import PopulerCategories from "@/components/PopulerCategories";
import TrendingTopics from "@/components/TrendingTopics"
import BecomeInstructor from "@/components/BecomeInstructor";
import TrustingTeams from "@/components/TrustingTeams";
import UdemyBusiness from "@/components/UdemyBusiness";
import TheFooter from "@/components/Shared/TheFooter";
export default {
    name: "HomePage",
    components: {
        HeaderSection,
        TheFooter,
        UdemyBusiness,
        TrustingTeams,
        BecomeInstructor,
        PopulerCategories,
        StudentsLook,
        SelectionCourse,
        TopSlide,
        TrendingTopics,

    },
};
</script>

<style>
#app{
}
</style>
