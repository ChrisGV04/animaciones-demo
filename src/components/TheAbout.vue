<script setup lang="ts">
import { gsap } from 'gsap';

const headline = ref<HTMLElement>();

onMounted(() => {
  gsap.to(headline.value!, {
    scrollTrigger: headline.value,
    duration: 1,
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: 'power2',
  });
});
</script>

<template>
  <section id="about-section" class="h-[90vh] overflow-hidden px-[5vw] py-24">
    <SectionHeader>Acerca de</SectionHeader>

    <p ref="headline" class="translate-y-96 transform font-poppins text-6xl leading-[1.12] opacity-0">
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
