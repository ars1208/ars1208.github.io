<template>
  <div class="skills__main">
    <h1>Skills</h1>
    <v-container>
      <v-row>
        <v-col class="skills__category">
          <h2>Programing</h2>
          <ul>
            <li>Python3</li>
            <li>TypeScript</li>
            <li>Vue.js</li>
            <li>Java</li>
          </ul>
        </v-col>
        <v-col class="skills__category">
          <h2>Language</h2>
          <ul>
            <li>Japanese</li>
            <li>English</li>
          </ul>
        </v-col>
        <v-col class="skills__category">
          <h2>Certification</h2>
          <ul>
            <li>基本情報技術者</li>
            <li>応用情報技術者</li>
            <li>Microsoft Azure Fundamentals (AZ-900)</li>
          </ul>
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
.skills__category {
  border: solid 1px #5b67a2;
  height: 300px;
  width: 300px;
}
</style>
