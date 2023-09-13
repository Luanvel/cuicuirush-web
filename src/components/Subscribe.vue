<script setup>
import { ref } from 'vue'
import bgStart from '../assets/bg_start.png'

defineProps({
})
</script>

<template>
  <div class="bg-gradient-radial from-blue-400 to-blue-50">
    <div class="bg-start bg-center bg-no-repeat bg-cover relative">
      <img :src="bgStart" class="invisible" />
      <div class="absolute top-0 left-0 w-full h-full">
        <iframe
          width="100%"
          height="100%"
          src="https://cdn.forms-content.sg-form.com/8337b6b8-629c-11ec-a2e8-faafea8671e9"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
