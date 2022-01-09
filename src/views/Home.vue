<template>
  <div>
    <about></about>
    <experience></experience>
    <education></education>
    <skills></skills>
    <interests></interests>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import About from "@/views/About.vue"
import Experience from "@/views/Experience.vue"
import Education from "@/views/Education.vue"
import Skills from "@/views/Skills.vue"
import Interests from "@/views/Interests.vue"

export default Vue.extend({
  name: "Home",

  components: {
    About,
    Experience,
    Education,
    Skills,
    Interests
  },
});
</script>
