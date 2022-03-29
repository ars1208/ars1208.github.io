<template>
  <div id="about" class="about__main">
    <h1>KAZUKI ARASHI</h1>
    <ul class="about__info_contacts">
      <li class="about__info_contact"><div class="about__info_icon-bg"><i class="fa fa-github about__info_icon"></i></div></li>
      <li class="about__info_contact"><div class="about__info_icon-bg"><i class="fa fa-linkedin about__info_icon"></i></div></li>
      <li class="about__info_contact"><div class="about__info_icon-bg"><i class="fa fa-facebook about__info_icon"></i></div></li>
      <li class="about__info_contact"><div class="about__info_icon-bg"><i class="fa fa-google about__info_icon"></i></div></li>
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
.about__info_contacts {
  list-style: none;
}
.about__info_contact {
  display: inline-block;
  margin: 0 5px;
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
  font-size: 30px;
  color: #f8f9fc;
  display: block;
  margin: auto;
}
</style>
