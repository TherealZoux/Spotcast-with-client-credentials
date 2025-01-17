<script setup>
import { useStore } from "vuex";
import { computed, ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { authenticateWithSpotify } from "@/services/AuthService"

const store = useStore();
const router = useRouter();

const filteredShows = computed(() => store.getters.filteredShows);
const loading = computed(() => store.getters.loading);
const screenWidth = ref(window.screen.width);

onBeforeMount(async () => {
  await authenticateWithSpotify()

  await store.dispatch("fetchData")
})



</script>

<template>
  <div
    class="w-ful h-[25rem] bg-[url('https://cdn.pixabay.com/photo/2020/10/01/14/20/donations-keeps-me-going-5618697_960_720.jpg')] bg-center bg-cover relative shadow-2xl shadow-blue-500/30 lg:mt-16 mt-[4rem]">
    <h2
      class="absolute top-[22%] md:text-[6rem] md:top-[40%] pl-4 text-[5rem] lg:text-[7rem] tracking-[24px] text-[#fff]">
      Good Vibes
    </h2>
    <p class="absolute top-[77%] pl-8 text-[1rem] tracking-[2px] text-[#fff]">
      "The best time to plant a tree was 20 years ago. The second best time is
      now." – Chinese Proverb
    </p>
  </div>

  <div v-if="loading" class="flex justify-center items-center m-20">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="200"
      height="200" style="shape-rendering: auto; display: block; background: #121212"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <g>
        <circle stroke-linecap="round" fill="none" stroke-dasharray="50.26548245743669 50.26548245743669"
          stroke="#71feac" stroke-width="8" r="32" cy="50" cx="50">
          <animateTransform values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite" type="rotate"
            attributeName="transform"></animateTransform>
        </circle>
      </g>
    </svg>
  </div>
  <section class="w-full pt-4" v-else>
    <h1 class="text-4xl font-bold text-center m-8">
      Popular Pod<span class="bg-[#DE1A3E] rounded">casts</span>
    </h1>
    <div class="flex gap-4 sm:gap-6 flex-wrap justify-center items-center w-full pl-4 sm:pl-4">
      <SpotCard v-for="show in filteredShows" :key="show.id" :posterImg="show.images[0].url"
        :imageWidth="show.images[0].width" :imageHight="show.images[0].height" :posterName="show.name"
        :posterCreator="show.publisher" :posterId="show.id"></SpotCard>
    </div>
  </section>
</template>

<style scoped>
.v-container {
  margin: 0;
}
</style>
i
