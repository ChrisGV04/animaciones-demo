<script setup lang="ts">
import { gsap } from 'gsap';

const line1 = ref<HTMLSpanElement>();
const line2 = ref<HTMLSpanElement>();

onMounted(() => {
  gsap.fromTo(
    '.animate-header-line',
    {
      y: (_, el) => {
        if (el.classList.contains('link')) return 200;
        return 500;
      },
    },
    {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
      delay: (_, el: HTMLElement) => {
        if (el.classList.contains('link')) return 0.5;
        return 0;
      },
    }
  );
});
</script>

<template>
  <section class="flex h-screen flex-col">
    <div class="flex px-[5vw] py-12 font-work text-2xl uppercase tracking-[1px] text-neutral-900">
      <div class="flex-1">Demo</div>
      <a
        target="_blank"
        href="https://chrisgvdev.com"
        class="transform transition-all duration-300 hover:scale-125 hover:text-amber-900"
        >CGV<span class="font-bold">WEB</span></a
      >
      <div class="hidden flex-1 text-right sm:block">Animación</div>
    </div>

    <div class="relative flex flex-1 items-center justify-center">
      <ul
        class="header-menu absolute left-1/2 top-0 -translate-x-1/2 text-center font-bai font-semibold uppercase tracking-[1px] text-neutral-700"
      >
        <div class="overflow-hidden">
          <li class="animate-header-line link">Sitios web</li>
        </div>
        <div class="overflow-hidden">
          <li class="animate-header-line link">Programación</li>
        </div>
        <div class="overflow-hidden">
          <li class="animate-header-line link">Tiendas en línea</li>
        </div>
      </ul>

      <h1 id="header-text" class="text-center font-bai text-[18vw] font-semibold uppercase leading-none">
        <div class="overflow-hidden">
          <span ref="line1" class="animate-header-line block">Ejemplo</span>
        </div>
        <div class="overflow-hidden">
          <span ref="line2" class="animate-header-line block">Premium</span>
        </div>
      </h1>
    </div>
  </section>
</template>
