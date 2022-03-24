<script setup lang="ts">
import { gsap } from 'gsap';

const headline = ref<HTMLElement>();

onMounted(() => {
  gsap.fromTo(
    headline.value!,
    { y: 300 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'power2',
      scrollTrigger: { trigger: headline.value, start: '-300 80%' },
    }
  );
});
</script>

<template>
  <section id="about-section" class="h-[80vh] overflow-hidden px-[5vw] py-24 lg:min-h-[90vh]">
    <SectionHeader>Acerca de</SectionHeader>

    <p ref="headline" class="font-poppins text-[clamp(24px,4.17vw,60px)] leading-[1.12] opacity-0">
      Esta es una página diseñada exclusívamente como demostración de las animaciones premium ofrecidas por
      <a
        href="https://chrisgvdev.com"
        target="_blank"
        class="font-work font-light text-amber-900 transition-colors hover:text-amber-600"
        >CGV<span class="font-bold">WEB</span></a
      >. Incluye apariciones elegantes, interacciones del usuario y otros efectos relacionados con los
      movimientos verticales del usuario por el sitio web.
    </p>
  </section>
</template>
