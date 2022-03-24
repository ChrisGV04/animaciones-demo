<script setup lang="ts">
import { gsap } from 'gsap';
import { GalleryImageItem } from '~/types';

const images: GalleryImageItem[] = [
  {
    title: 'Animaciones premium',
    subtitle: 'Diseño web',
    category: 'Sitio web / Tienda en línea',
    src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=40',
  },
  {
    title: 'Diseño personalizado',
    subtitle: 'Resalta con clase',
    category: 'Sitio web / Tienda en línea',
    src: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=40',
  },
  {
    title: 'Elegancia',
    subtitle: 'Mejor presentación',
    category: 'Sitio web / Tienda en línea',
    src: 'https://images.unsplash.com/photo-1600607688960-e095ff83135c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=20',
  },
  {
    title: 'Moderno',
    subtitle: 'Llama la atención',
    category: 'Sitio web / Tienda en línea',
    src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=40',
  },
];

const galleryWrap = ref<HTMLElement>();
const galleryItems = ref<any[]>([]);

onMounted(() => {
  // const sections = gsap.utils.toArray('.gallery-item');
  const sections = galleryItems.value!.map((i) => i.itemWrapper);

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      scrub: 1,
      pin: true,
      trigger: galleryWrap.value,
      end: `+=${galleryWrap.value!.offsetHeight * sections.length}`,
    },
  });
});
</script>

<template>
  <section ref="galleryWrap" class="relative flex h-screen flex-nowrap bg-red-500">
    <GalleryItem
      :key="imgIdx"
      :image="image"
      :image-idx="imgIdx"
      v-for="(image, imgIdx) in images"
      :ref="(el:any) => galleryItems.push(el)"
    />
    <!-- <section
      :key="imgIdx"
      ref="galleryItems"
      v-for="(image, imgIdx) in images"
      :style="{ backgroundImage: `url(${image.src})` }"
      class="gallery-item flex h-screen w-screen shrink-0 items-center justify-center bg-sky-900/40 bg-cover bg-center bg-blend-darken"
    >
      <div class="font-bai text-7xl font-bold text-white drop-shadow-lg">{{ image.title }}</div>
    </section> -->

    <!-- <div
      id="gallery-counter"
      class="absolute top-[10%] left-[100px] z-[1] inline-block font-bai font-semibold leading-4 text-white mix-blend-difference"
    >
      <span>{{ activeImage }}</span>
      <span id="divider" class="m-2 inline-block h-px w-[6.25vw] bg-white" />
      <span>{{ images.length }}</span>
    </div> -->

    <!-- <div ref="gallery" class="relative flex h-screen flex-nowrap">
      <GalleryItem
        :key="imgIdx"
        :image="image"
        :image-idx="imgIdx"
        v-for="(image, imgIdx) in images"
        @updateActive="(newIdx) => (activeImage = activeImage + 1)"
      />
    </div> -->
  </section>
</template>
