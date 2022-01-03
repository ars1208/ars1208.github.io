<template>
  <v-app>
    <v-container fluid class="ma-0 pa-0">
      <v-row>
        <v-col cols="3">
          <side-navigation></side-navigation>
        </v-col>
        <v-col>
          <v-main>
            <router-view />
          </v-main>
        </v-col>
      </v-row>
    </v-container>
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

<style scoped>
</style>
