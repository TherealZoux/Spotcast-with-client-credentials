<template>
  <v-app v-if="!loading">
    <v-main class="flex flex-col justify-between">
      <HeaderComponent />
      <RouterView></RouterView>
      <AppFooter />
    </v-main>
  </v-app>
  <div v-else class="flex justify-center items-center m-20">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="200"
      height="200" style="shape-rendering: auto; display: block; " xmlns:xlink="http://www.w3.org/1999/xlink">
      <g>
        <circle stroke-linecap="round" fill="none" stroke-dasharray="50.26548245743669 50.26548245743669"
          stroke="#71feac" stroke-width="8" r="32" cy="50" cx="50">
          <animateTransform values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite" type="rotate"
            attributeName="transform"></animateTransform>
        </circle>
      </g>
    </svg>
  </div>

</template>

<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue"
import { computed, ref, onBeforeMount } from "vue";
import { authenticateWithSpotify } from "@/services/AuthService"
import { useStore } from "vuex";

const store = useStore();

const loading = false//computed(() => store.getters.loading);





onBeforeMount(async () => {
  //  await authenticateWithSpotify()
})

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
