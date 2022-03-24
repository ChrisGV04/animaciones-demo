<script setup lang="ts">
import { gsap } from 'gsap';
import imagesLoaded from 'imagesloaded';

const sources = [
  'https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=20',
  'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=20',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=20',
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=20',
  'https://images.unsplash.com/photo-1527206363095-ca2f054128b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=20',
  'https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=20',
  'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=20',
  'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=20',
  'https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=20',
];

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
      <div class="gallery-wrapper w-max">PRESENTACIÓN MODERNA</div>
    </div>

    <div :ref="(el:any) => galleries.push(el)" v-for="gIdx in 3" :key="`g${gIdx}`">
      <ul class="gallery-wrapper flex gap-4">
        <li
          v-for="imIdx in 3"
          :key="`g${gIdx}i${imIdx}`"
          class="w-screen shrink-0 md:w-[clamp(500px,60vw,800px)]"
        >
          <img
            :ref="(el:any) => images.push(el)"
            class="h-[30vh] w-full object-cover md:h-[40vh]"
            :src="sources[(gIdx - 1) * gIdx + imIdx - 1]"
          />
        </li>
      </ul>
    </div>

    <div :ref="(el:any) => galleries.push(el)" class="text">
      <div class="gallery-wrapper w-max">EFECTOS IMPACTANTES</div>
    </div>
  </section>
</template>

<style scoped>
.text {
  @apply font-bai text-[clamp(4rem,15vw,10rem)] font-bold leading-none;
}
</style>
