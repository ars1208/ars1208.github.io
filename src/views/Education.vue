<template>
  <div id="education" class="education__main">
    <h1>Education</h1>
    <div class="education__content">
      <h2>筑波大学大学院</h2>
      <p>図書館情報メディア研究科 図書館情報メディア専攻</p>
    </div>
    <div class="education__content">
      <h2>筑波大学</h2>
      <p>情報学群 知識情報図書館学類</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Education",

  components: {},
});
</script>

<style scoped>
.education__main {
  height: 100vh;
}
</style>
