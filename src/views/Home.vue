<template>
  <div>
    <about></about>
    <experience></experience>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import About from "@/views/About.vue"
import Experience from "@/views/Experience.vue"

export default Vue.extend({
  name: "Home",

  components: {
    About,
    Experience
  },
});
</script>
