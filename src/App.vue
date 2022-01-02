<template>
  <v-app>
    <side-navigation></side-navigation>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import SideNavigation from "@/components/SideNavigation.vue";

export default Vue.extend({
  name: "App",

  components: {
    SideNavigation,
  },
});
</script>
