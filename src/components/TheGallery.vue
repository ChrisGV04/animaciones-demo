<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
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
  // Run different animations on mobile than on desktop
  const sections = galleryItems.value!.map((i) => i.itemWrapper);

  ScrollTrigger.matchMedia({
    // Desktop animation
    '(min-width: 768px)': () => {
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
    },

    // Mobile animation
    '(max-width: 767px)': () => {
      for (let sIdx = 0; sIdx < sections.length; sIdx++) {
        const section = sections[sIdx];
        const [x, xEnd] = sIdx % 2 ? ['100%', 0] : [section!.scrollWidth * -1, 0];

        gsap.fromTo(
          section,
          { x },
          {
            x: xEnd,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    },
  });
});
</script>

<template>
  <!-- relative flex h-screen flex-nowrap bg-red-500 -->
  <section
    ref="galleryWrap"
    class="relative flex flex-col overflow-x-hidden bg-red-500 md:h-screen md:flex-row md:flex-nowrap"
  >
    <GalleryItem
      :key="imgIdx"
      :image="image"
      :image-idx="imgIdx"
      v-for="(image, imgIdx) in images"
      :ref="(el:any) => galleryItems.push(el)"
    />
  </section>
</template>
