<script setup lang="ts">
import { gsap } from 'gsap';

const line1 = ref<HTMLSpanElement>();
const line2 = ref<HTMLSpanElement>();

onMounted(() => {
  gsap.to([line1.value, line2.value], {
    duration: 1,
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: 'power2',
  });
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
      <div class="flex-1 text-right">Animación</div>
    </div>

    <div class="relative flex flex-1 items-center justify-center">
      <ul
        class="header-menu absolute left-[5vw] top-0 font-bai font-semibold uppercase tracking-[1px] text-neutral-700"
      >
        <li>Sitios web</li>
        <li>Programación</li>
        <li>Tiendas en línea</li>
      </ul>

      <h1 id="header-text" class="text-center font-bai text-[18vw] font-semibold uppercase leading-none">
        <div class="overflow-hidden">
          <span ref="line1" class="block translate-y-[500px]">Ejemplo</span>
        </div>
        <div class="overflow-hidden">
          <span ref="line2" class="block translate-y-[500px]">Premium</span>
        </div>
      </h1>
    </div>
  </section>
</template>
