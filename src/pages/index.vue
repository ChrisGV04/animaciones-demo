<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller('lg');
</script>

<template>
  <div id="main-container">
    <template v-if="!isMobile">
      <TheHeader />

      <TheFeatured />

      <TheAbout />

      <TheGallery />

      <TheFooter />
    </template>

    <div v-else class="flex h-screen w-full flex-col items-center justify-center px-4">
      <a
        target="_blank"
        href="https://chrisgvdev.com"
        class="font-work text-3xl transition-colors duration-300 hover:text-amber-900"
        >CGV<span class="font-bold">WEB</span></a
      >

      <div class="mt-3 max-w-lg text-center font-bai text-2xl font-semibold text-amber-700 sm:text-4xl">
        Las animaciones de esta página están diseñadas para pantallas más grandes
      </div>
    </div>
  </div>
</template>
