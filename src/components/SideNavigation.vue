<template>
	<div class="side-nav__main">
    <div class="side-nav__avator">
      <v-img
        class="side-nav__img"
        src="@/assets/logo.png"
        height="200px"
        width="200px"
      >
      </v-img>
    </div>
  </div>
</template>

<style scoped>
.side-nav__main {
  background-color: #5B67A2;
  height: 100vh;
  padding-top: 50px;
  min-width: 300px;
}
.side-nav__avator {
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background-color: #7B86AA;
  margin-left: auto;
  margin-right: auto;
  padding-top: 25px;
}
.side-nav__img {
  background-color: #F8F9FC;
  border-radius: 50%;
  margin: auto;
}
</style>