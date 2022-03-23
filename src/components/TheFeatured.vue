<script setup lang="ts">
import { gsap } from 'gsap';

const [firstImg, secondImg] = [
  'https://picsum.photos/id/1005/300/400',
  'https://picsum.photos/id/1015/800/800',
];

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
      <img ref="image1" :src="firstImg" class="w-full object-cover" />
    </div>

    <div class="flex items-end justify-start">
      <h6
        class="origin-bottom-left translate-x-full -rotate-90 transform font-work text-xl font-light uppercase"
      >
        Presentación
      </h6>
      <img ref="image2" :src="secondImg" class="h-[100vh] w-full object-cover" />
    </div>
  </section>
</template>

<style scoped>
img {
  clip-path: inset(100% 0% 0% 0%);
}
</style>
