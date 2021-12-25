<script setup>
import { ref } from 'vue'
import bgStart from '../assets/bg_start.png'

defineProps({
})
</script>

<template>
  <div class="bg-gradient-radial from-blue-400 to-blue-50 w-full h-full">
    <div class="bg-start h-full bg-no-repeat bg-cover pt-10"></div>
  </div>
  <div class="bg-grass p-3">
    <p
      class="py-5"
    >CuicuiRush is an NFT game coming in 2022 where one can become a cuicui racing expert. You can breed, evolve, give them muuuch love and prepare them to race faster than a thunder!</p>
    <p class="py-5">Become the greatest Cuicui Trainer of your generation in this exciting game</p>
    <p class="py-5">And win some money while you have fun with it.</p>
  </div>
</template>

<style scoped>
</style>
