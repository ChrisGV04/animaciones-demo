<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
</script>

<template>
  <div>
    <TheHeader />

    <TheFeatured />

    <TheAbout />

    <TheGallery />

    <TheZigZag />

    <TheFooter />
  </div>
</template>
