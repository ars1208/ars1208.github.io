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
    <h1 class="side-nav__name">KAZUKI ARASHI</h1>
    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-content> ABOUT ME </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content> EXPERIENCE </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content> EDUCATION </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content> SKILLS </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content> INTERESTS </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<style scoped>
.side-nav__main {
  background-color: #5b67a2;
  height: 100vh;
  padding-top: 50px;
  min-width: 300px;
}
.side-nav__avator {
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background-color: #7b86aa;
  margin-left: auto;
  margin-right: auto;
  padding-top: 25px;
}
.side-nav__img {
  background-color: #f8f9fc;
  border-radius: 50%;
  margin: auto;
}
.side-nav__name {
  color: #f8f9fc;
  text-align: center;
  margin: 50px auto;
}
</style>
