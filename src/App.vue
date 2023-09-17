<script setup>
import buttonHome from './assets/home.png'
import buttonHomeHover from './assets/homeHover.png'
import buttonSubscribe from './assets/subscribe.png'
import buttonSubscribeHover from './assets/subscribeHover.png'
import logo from './assets/logo.png'
import { ref } from 'vue'

const hovered = ref(0)
</script>

<template>
  <header
    class="mt-2 bg-woodbar bg-no-repeat bg-center w-full h-20 flex items-center justify-center md:justify-between space-x-3 md:pr-20"
  >
  <div class="md:w-2/10 w-1/2 object-cover h-full pl-10 self-start">
    <img :src="logo" class="object-cover h-full"/>
  </div>
  <nav class="w-4/10 flex">
    <router-link
      to="/"
    >
      <img :src="hovered === 1 ? buttonHomeHover : buttonHome" @mouseover="hovered = 1" @mouseleave="hovered = null"/>
    </router-link>
    <router-link
      to="/subscribe"
    ><img :src="hovered === 2 ? buttonSubscribeHover : buttonSubscribe" @mouseover="hovered = 2" @mouseleave="hovered = null"/></router-link>
  </nav>
  </header>
  <router-view></router-view>
</template>

<style>
</style>
