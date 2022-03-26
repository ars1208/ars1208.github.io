<template>
  <div id="about" class="about__main">
    <h1>KAZUKI ARASHI</h1>
    <ul>
      <li><div class="about__info_icon-bg"><img src="../assets/github-brands.svg" alt="GitHub" class="about__info_icon" /></div></li>
      <li><div class="about__info_icon-bg"><img src="../assets/linkedin-in-brands.svg" alt="Linketin" class="about__info_icon" /></div></li>
      <li>AtCoder</li>
      <li>Gmail</li>
    </ul>
    <p>1994年生まれ。</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About",

  components: {},
});
</script>

<style scoped>
.about__main {
  height: 100vh;
}
.about__info_icon-bg {
  height: 50px;
  width: 50px;
  background-color: #5b67a2;
  border-radius: 50%;
  display: flex;
  align-items: center;
}
.about__info_icon {
  height: 30px;
  display: block;
  margin: auto;
}
</style>
