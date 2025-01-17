<template>
  <main class="flex flex-col p-4 mt-[12rem]">
    <h1 class="text-4rem text-red roboto-black m-auto bg-[#35353575] p-16">
      Dashboard does't avilable in client credentials version <br>
      <button @click="viewImg = !viewImg" class="text-[#67409b] p-2">preview?</button>

    </h1>
    <div>
      <img src="../assets/Screenshot 2025-01-05 at 14-03-38 Spodcast.png" alt="dashboard preview" v-if="viewImg">
    </div>

  </main>
</template>

<script setup>
import { ref } from "vue"

const viewImg = ref(false)

</script>

<style lang="scss" scoped>
.img {
  display: block
}
</style>
