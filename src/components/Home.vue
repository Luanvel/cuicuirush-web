<script setup>
import bgStart from '../assets/bg_start.png'
import adoptionGirl from '../assets/adoptiongirl.png'
import marketGirl from '../assets/marketgirl.png'

defineProps({
})
</script>

<template>
  <div class="bg-gradient-radial from-blue-400 to-blue-50">
    <div class="bg-start bg-center bg-no-repeat">
      <img :src="bgStart" class="invisible" />
    </div>
  </div>
  <div class="bg-grass py-10">
    <div class="flex flex-col lg:flex-row m-auto w-full lg:w-1/2 lg:rounded-2xl overflow-hidden">
      <div class="lg:w-1/2">
        <img :src="adoptionGirl" />
      </div>
      <div
        class="bg-white opacity-50 text-center lg:w-1/2 flex flex-col justify-center pt-2 lg:pt-0"
      >
        <h1 class="font-bold text-md lg:text-5xl">Adopt</h1>
        <p class="py-3">Adopt new cuicuis from our lovely Petkeeper</p>
      </div>
    </div>
  </div>
  <div class="bg-grass py-10">
    <div
      class="flex flex-col-reverse lg:flex-row m-auto w-full lg:w-1/2 lg:rounded-2xl overflow-hidden"
    >
      <div
        class="bg-white opacity-50 text-center lg:w-1/2 flex flex-col justify-center pt-2 lg:pt-0"
      >
        <h1 class="font-bold text-md lg:text-5xl">Evolve</h1>
        <p
          class="py-3"
        >Feed your cuicuis with the right meal to evolve them to the next level. Discover new species as you play!</p>
      </div>
      <div class="lg:w-1/2">
        <img :src="marketGirl" />
      </div>
    </div>
  </div>
  <div class="bg-grass py-2 lg:px-60 lg:py-16">
    <div class="bg-white opacity-50 p-8 lg:rounded-2xl text-center">
      <h1 class="font-bold text-md lg:text-5xl">Race</h1>
      <p class="py-3">Equip and train your cuicuis so they never lose a race!</p>
    </div>
  </div>
  <div class="bg-grass py-2 pt-10 lg:pt-0 lg:px-60 lg:py-16">
    <div class="bg-white opacity-50 p-8 lg:rounded-2xl text-center">
      <h1 class="font-bold text-md lg:text-5xl">Become the #1</h1>
      <p
        class="py-3"
      >Keep training, keep feeding, keep bredding, keep RACING and become the numero uno.</p>
    </div>
  </div>
  <footer class="bg-gray-700 py-2 pt-10 lg:p-16 lg:px-60">
    <div class="opacity-80 lg:p-8 lg:rounded-2xl text-white text-center">
      <p>CuicuiRush is a game coming in 2022. You can breed, evolve, equip, train and give your cuicuis muuuch love (and other type of potions) so they can race faster than a THUNDER!</p>
      <p>Follow our newsletter to be the first to know when we launch!</p>
      <p>
        Follow us on
        <a
          href="https://www.instagram.com/cuicuirush/"
          class="font-bold"
          target="_blank"
        >INSTAGRAM</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
</style>
