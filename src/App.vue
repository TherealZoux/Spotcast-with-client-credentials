<template>
  <v-app>
    <v-main class="flex flex-col justify-between">
      <HeaderComponent />
      <RouterView></RouterView>
      <AppFooter />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue"
</script>
<style scoped>
a {
  text-decoration: none;
}

p {
  font-size: 22px;
}
span {
  color: rgb(133, 133, 133);
}

* {
  font-family: "Roboto", sans-serif;
}
</style>
