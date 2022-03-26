<script setup lang="ts">
import { gsap } from 'gsap';
import imagesLoaded from 'imagesloaded';

const animationComplete = ref(false);

const mainImg = ref<HTMLElement>();
const decorImages = ref<HTMLElement[]>([]);
const navigation = ref<HTMLElement>();
const mainContent = ref<HTMLElement>();
const headline = ref<HTMLElement[]>([]);

onMounted(() => {
  imagesLoaded([...decorImages.value, mainImg.value!]).on('always', startAnimations);
});

function startAnimations() {
  const tl = gsap.timeline({
    onComplete: () => {
      animationComplete.value = true;

      for (let idx = 0; idx < decorImages.value.length; idx++) {
        const element = decorImages.value[idx];
        element.remove();
      }
    },
  });

  if (!mainImg.value || !navigation.value || !mainContent.value) return;

  tl.fromTo(mainImg.value, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
  tl.fromTo(decorImages.value, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2 });
  tl.to(
    decorImages.value,
    {
      y: -200,
      opacity: 0,
      duration: 1,
      onComplete: () => {
        for (let idx = 0; idx < decorImages.value.length; idx++) {
          const element = decorImages.value[idx];
          element.remove();
        }
      },
    },
    '>1.5'
  );
  tl.to(mainImg.value, { y: '95vh', x: 0, width: '90vw', zIndex: -1, duration: 1.2 }, '<');

  tl.to(navigation.value, { y: 0, opacity: 1 });
  tl.to(mainContent.value, { opacity: 1 }, '<');
  tl.to(headline.value, { y: 0, stagger: 0.1, opacity: 1 });
}
</script>

<template>
  <div :class="['relative h-screen', !animationComplete && 'overflow-hidden']">
    <div>
      <header ref="navigation" class="flex -translate-y-full items-center px-[5vw] py-8 opacity-0">
        <a target="_blank" href="https://chrisgvdev.com" class="font-work text-3xl font-light text-gray-900"
          >CGV<span class="font-bold">WEB</span></a
        >

        <nav class="flex flex-1 justify-center gap-20">
          <a href="#" class="text-lg font-semibold text-gray-900">Diseño</a>
          <a href="#" class="text-lg font-semibold text-gray-900">Estrategia</a>
          <a href="#" class="text-lg font-semibold text-gray-900">Proyectos</a>
          <a href="#" class="text-lg font-semibold text-gray-900">Acerca</a>
          <a href="#" class="text-lg font-semibold text-gray-900">¿Por qué nosotros?</a>
        </nav>

        <a
          href="https://chrisgvdev.com/contacto"
          class="block border-b-2 border-gray-900 py-3 text-lg font-semibold text-gray-900"
          >Trabajemos juntos</a
        >
      </header>

      <div ref="mainContent" class="flex flex-col justify-between opacity-0">
        <div class="flex items-center">
          <div class="overflow-hidden">
            <h1
              :ref="(el:any) => headline.push(el)"
              class="translate-y-full font-bai text-[clamp(80px,16.67vw,240px)] font-semibold leading-none"
            >
              brand
            </h1>
          </div>

          <div class="flex flex-1 justify-center">
            <p
              :ref="(el:any) => headline.push(el)"
              class="max-w-sm translate-y-full text-lg font-semibold opacity-0"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In exercitationem quas tempora beatae,
              minima fugit!
            </p>
          </div>
        </div>

        <div class="ml-[15vw] overflow-hidden">
          <h1
            :ref="(el:any) => headline.push(el)"
            class="translate-y-full font-bai text-[clamp(80px,16.67vw,240px)] font-semibold leading-none"
          >
            experience
          </h1>
        </div>

        <div class="ml-[30vw] overflow-hidden">
          <h1
            :ref="(el:any) => headline.push(el)"
            class="translate-y-full font-bai text-[clamp(80px,16.67vw,240px)] font-semibold leading-none"
          >
            studio
          </h1>
        </div>
      </div>
    </div>

    <img
      ref="mainImg"
      class="absolute top-1/2 left-1/2 z-10 w-[40vw] -translate-x-1/2 -translate-y-1/2 opacity-0"
      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=40"
    />
    <img
      :ref="(el: any) => decorImages.push(el)"
      class="absolute top-[10vh] left-[10vw] z-20 w-[25vw] opacity-0"
      src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=40"
    />
    <img
      :ref="(el: any) => decorImages.push(el)"
      class="absolute top-[15vh] right-[6vw] w-[23vw] opacity-0"
      src="https://images.unsplash.com/photo-1600585154166-d8897c8f930d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=40"
    />
    <img
      :ref="(el: any) => decorImages.push(el)"
      class="absolute bottom-[8vh] left-[15vw] w-[17vw] opacity-0"
      src="https://images.unsplash.com/photo-1604014237256-11d475e2a2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=40"
    />
    <img
      :ref="(el: any) => decorImages.push(el)"
      class="absolute bottom-[10vh] right-[13vw] z-20 w-[20vw] opacity-0"
      src="https://images.unsplash.com/photo-1616627434852-097e535878d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=40"
    />
  </div>
</template>

<route lang="yaml">
name: example-2
</route>
