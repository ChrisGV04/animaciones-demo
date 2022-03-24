<script setup lang="ts">
import { gsap } from 'gsap';
import imagesLoaded from 'imagesloaded';

const images = ref<HTMLImageElement[]>([]);
const galleries = ref<HTMLElement[]>([]);

onMounted(() => {
  imagesLoaded(images.value).on('always', setAnimations);
});

const setAnimations = () => {
  for (let gIdx = 0; gIdx < galleries.value.length; gIdx++) {
    const section = galleries.value[gIdx];
    const w = section.querySelector('.gallery-wrapper');
    const [x, xEnd] =
      gIdx % 2 ? ['100%', (w!.scrollWidth - section.offsetWidth) * -1] : [w!.scrollWidth * -1, 0];

    gsap.fromTo(w, { x }, { x: xEnd, scrollTrigger: { trigger: section, scrub: 0.5 } });
  }
};
</script>

<template>
  <section ref="demoWrapper" class="space-y-4 overflow-x-hidden py-24">
    <div :ref="(el:any) => galleries.push(el)" class="text">
      <div class="gallery-wrapper w-max">PRESENTACION MODERNA</div>
    </div>

    <div :ref="(el:any) => galleries.push(el)" v-for="gIdx in 3" :key="`g${gIdx}`">
      <ul class="gallery-wrapper flex gap-4">
        <li v-for="imIdx in 3" :key="`g${gIdx}i${imIdx}`" class="w-[clamp(500px,60vw,800px)] shrink-0">
          <img
            class="h-auto w-full"
            :ref="(el:any) => images.push(el)"
            :src="`https://picsum.photos/400/200?random=${gIdx * imIdx + (Math.random() * (10 - 1) + 1)}`"
          />
        </li>
      </ul>
    </div>

    <div :ref="(el:any) => galleries.push(el)" class="text">
      <div class="gallery-wrapper w-max">PRESENTACION MODERNA</div>
    </div>
  </section>
</template>

<style scoped>
.text {
  @apply font-bai text-[clamp(8rem,15vw,16rem)] font-bold leading-none;
}
</style>
