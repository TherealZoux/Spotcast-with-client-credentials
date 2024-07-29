<template>
  <v-app>
      <v-main>
        <HeaderComponent />
        <RouterView></RouterView>
        <AppFooter />
      </v-main>
  </v-app>
</template>

<script setup>
import {  ref  } from "vue";
import store from "./store";
import {  RouterView } from "vue-router";

const spin = ref(true);


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

*{
    font-family: "Roboto", sans-serif;

}

</style>
