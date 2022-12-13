<template>
    <HeaderSection></HeaderSection>

    <router-view></router-view>

    <TheFooter></TheFooter>

</template>

<script>
import HeaderSection from "@/components/Shared/HeaderSection";
import TheFooter from "@/components/Shared/TheFooter";

export default {
  name: "App",
  components: {
      HeaderSection,
      TheFooter
  },
};
</script>

<style>
#app{
}
</style>
