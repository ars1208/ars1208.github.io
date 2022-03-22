<template>
  <div id="skills" class="skills__main">
    <h1>Skills</h1>
    <v-container>
      <v-row>
        <v-col>
          <v-card height="300px" color="#5B67A2">
            <h2>Programing</h2>
            <ul>
              <li>Python3</li>
              <li>TypeScript</li>
              <li>Vue.js</li>
              <li>Java</li>
            </ul>
          </v-card>
        </v-col>
        <v-col>
          <v-card height="300px" color="#5B67A2">
            <h2>Language</h2>
            <ul>
              <li>Japanese</li>
              <li>English</li>
            </ul>
          </v-card>
        </v-col>
        <v-col>
          <v-card height="300px" color="#5B67A2">
            <h2>Certification</h2>
            <ul>
              <li>基本情報技術者</li>
              <li>応用情報技術者</li>
              <li>Microsoft Azure Fundamentals (AZ-900)</li>
            </ul>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Skills",

  components: {},
});
</script>

<style scoped>
.skills__main {
  height: 100vh;
}
</style>
