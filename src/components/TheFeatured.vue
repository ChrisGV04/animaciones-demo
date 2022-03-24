<script setup lang="ts">
import { gsap } from 'gsap';

const image1 = ref<HTMLImageElement>();
const image2 = ref<HTMLImageElement>();

onMounted(() => {
  gsap.fromTo(
    image1.value!,
    { clipPath: 'inset(100% 0% 0% 0%)' },
    {
      duration: 0.75,
      scrollTrigger: image1.value,
      clipPath: 'inset(0% 0% 0% 0%)',
    }
  );

  gsap.fromTo(
    image2.value!,
    { clipPath: 'inset(100% 0% 0% 0%)' },
    {
      duration: 1.5,
      scrollTrigger: image2.value,
      clipPath: 'inset(0% 0% 0% 0%)',
    }
  );
});
</script>

<template>
  <section
    id="featured-section"
    class="flex h-screen flex-col items-center gap-4 px-[5vw] py-12 md:flex-row md:py-24"
  >
    <div class="md:w-2/5 lg:w-1/3">
      <h6 class="font-work text-xl font-light uppercase">Decoración</h6>
      <img
        ref="image1"
        class="w-full object-cover"
        src="https://images.unsplash.com/photo-1496360650824-229a83e340db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=30"
      />
    </div>

    <div class="flex w-full flex-col items-end justify-start md:flex-row md:pl-10 lg:pl-20">
      <h6 class="custom-text font-work text-xl font-light uppercase">Presentación</h6>
      <img
        ref="image2"
        class="w-full flex-1 object-cover md:h-[80vh] lg:h-screen"
        src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=40"
      />
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 768px) {
  .custom-text {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
  }
}
</style>
