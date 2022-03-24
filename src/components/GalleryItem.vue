<script setup lang="ts">
import { PropType } from 'vue';
import { GalleryImageItem } from '~/types';

defineProps({
  imageIdx: { type: Number, required: true },
  image: { type: Object as PropType<GalleryImageItem>, required: true },
});

const itemWrapper = ref<HTMLElement>();
const itemImage = ref<HTMLElement>();

defineExpose({ itemWrapper, itemImage });
</script>

<template>
  <div
    ref="itemWrapper"
    class="gallery-item h-[50vh] w-screen shrink-0 px-[5vw] py-10 md:h-full md:px-20 md:py-24"
  >
    <div class="relative flex h-full flex-col md:flex-row md:items-end">
      <div class="z-10 text-neutral-100 drop-shadow-md">
        <h2 :id="`gallery-info-title-${imageIdx}`" class="font-bai text-[6vw] font-semibold leading-[6vw]">
          {{ image.title }}
        </h2>
        <h6
          class="gallery-info-subtitle font-bodoni text-[6vw] font-semibold leading-[6vw] text-neutral-200 md:text-transparent"
        >
          {{ image.subtitle }}
        </h6>
        <p :id="`gallery-info-category`" class="mt-2 font-bai font-normal leading-6 md:mt-5 md:text-2xl">
          {{ image.category }}
        </p>
      </div>

      <div
        ref="itemImage"
        :style="{ backgroundImage: `url(${image.src})` }"
        class="gallery-item-image z-0 h-full w-full bg-cover bg-center md:absolute md:bottom-0 md:right-0 md:w-4/5"
      ></div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .gallery-info-subtitle {
    -webkit-text-stroke: 2px rgb(229, 229, 229);
  }
}
</style>
