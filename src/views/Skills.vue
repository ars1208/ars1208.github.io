<template>
  <div class="experience__main">
    <h1>Skills</h1>
    <div>
      <h2>Programing</h2>
      <ul>
        <li>Python3</li>
        <li>TypeScript</li>
        <li>Vue.js</li>
        <li>Java</li>
      </ul>
    </div>
    <div>
      <h2>Language</h2>
      <ul>
        <li>Japanese</li>
        <li>English</li>
      </ul>
    </div>
    <div>
      <h2>Certification</h2>
      <ul>
        <li>基本情報技術者</li>
        <li>応用情報技術者</li>
        <li>Microsoft Azure Fundamentals (AZ-900)</li>
      </ul>
    </div>
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
.experience__main {
  height: 100vh;
}
</style>
