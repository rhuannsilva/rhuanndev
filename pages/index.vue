<template>
    <div class="bg-slate-100">
        <Header></Header>
    </div>
    <div id="body">
        <ImageInitial></ImageInitial>
        <Apresentation></Apresentation>
        <Stack></Stack>
        <Experience></Experience>
        <IntroductionProjects></IntroductionProjects>
        <Projects></Projects>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Header from "@/pages/partials/header.vue";
import Apresentation from "@/pages/partials/apresentation.vue";
import Stack from "@/pages/partials/stack.vue";
import Experience from "./partials/experience.vue";
import IntroductionProjects from "./partials/introduction-projects.vue";
import Projects from "./partials/projects.vue";
import Footer from "./partials/footer.vue";
import ImageInitial from "./partials/image-initial.vue";

useHead({
    title: 'rhuannsilva.dev'
});
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>