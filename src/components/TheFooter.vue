<script setup lang="ts">
import { gsap } from 'gsap';

const line1 = ref<HTMLSpanElement>();
const line2 = ref<HTMLSpanElement>();
const locationHeadline = ref<HTMLElement>();

onMounted(() => {
  gsap.to([line1.value, line2.value], {
    scrollTrigger: {
      trigger: locationHeadline.value,
      start: 'top 80%',
    },
    duration: 1,
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: 'power2',
  });
});
</script>

<template>
  <section id="footer" class="min-h-screen px-[5vw] py-10 text-center">
    <SectionHeader>Hecho en</SectionHeader>
    <h1 ref="locationHeadline" class="font-bodoni text-[16vw] uppercase leading-tight">
      <div class="overflow-hidden">
        <span ref="line1" class="block translate-y-[500px]">Jalisco</span>
      </div>
      <div class="overflow-hidden">
        <span ref="line2" class="block translate-y-[500px]">México</span>
      </div>
    </h1>
  </section>
</template>
