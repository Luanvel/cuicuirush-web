<script setup>
</script>

<template>
  <header
    class="bg-woodbar bg-cover bg-no-repeat w-full h-24 flex items-center justify-center space-x-3"
  >
    <router-link
      to="/"
      class="px-3 py-2 bg-wood rounded-lg hover:bg-amber-900 hover:text-white"
    >Home</router-link>
    <router-link
      to="/subscribe"
      class="px-3 py-2 bg-wood rounded-lg hover:bg-amber-900 hover:text-white"
    >Subscribe now!</router-link>
  </header>
  <router-view></router-view>
</template>

<style>
</style>
