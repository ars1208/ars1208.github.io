<template>
  <div>
    <v-container fluid class="ma-0 pa-0">
      <v-row>
        <v-col cols="3">
          <side-navigation></side-navigation>
        </v-col>
        <v-col>
          <div>
            <about></about>
            <experience></experience>
            <education></education>
            <skills></skills>
            <interests></interests>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import About from "@/views/About.vue";
import Experience from "@/views/Experience.vue";
import Education from "@/views/Education.vue";
import Skills from "@/views/Skills.vue";
import Interests from "@/views/Interests.vue";
import SideNavigation from "@/components/SideNavigation.vue";

export default Vue.extend({
  name: "Home",

  components: {
    SideNavigation,
    About,
    Experience,
    Education,
    Skills,
    Interests,
  },
});
</script>
