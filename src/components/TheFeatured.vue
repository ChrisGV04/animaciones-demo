<script setup lang="ts">
import { gsap } from 'gsap';

const image1 = ref<HTMLImageElement>();
const image2 = ref<HTMLImageElement>();

onMounted(() => {
  gsap.to(image1.value!, {
    duration: 0.75,
    scrollTrigger: image1.value,
    clipPath: 'inset(0% 0% 0% 0%)',
  });

  gsap.to(image2.value!, {
    duration: 1.5,
    scrollTrigger: image2.value,
    clipPath: 'inset(0% 0% 0% 0%)',
  });
});
</script>

<template>
  <section id="featured-section" class="grid grid-cols-[1fr,3fr] items-center px-[5vw] py-24">
    <div>
      <h6 class="font-work text-xl font-light uppercase">Decoración</h6>
      <img
        ref="image1"
        class="w-full object-cover"
        src="https://images.unsplash.com/photo-1496360650824-229a83e340db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=30"
      />
    </div>

    <div class="flex items-end justify-start">
      <h6
        class="origin-bottom-left translate-x-full -rotate-90 transform font-work text-xl font-light uppercase"
      >
        Presentación
      </h6>
      <img
        ref="image2"
        class="h-[100vh] w-full object-cover"
        src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=40"
      />
    </div>
  </section>
</template>

<style scoped>
img {
  clip-path: inset(100% 0% 0% 0%);
}
</style>
