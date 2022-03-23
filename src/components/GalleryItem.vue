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
  <div ref="itemWrapper" class="gallery-item h-full w-screen shrink-0 px-20 py-24">
    <div class="relative flex h-full items-end">
      <div class="z-10 text-neutral-100 drop-shadow-md">
        <h2 :id="`gallery-info-title-${imageIdx}`" class="font-bai text-[6vw] font-semibold leading-[6vw]">
          {{ image.title }}
        </h2>
        <h6 class="gallery-info-subtitle font-bodoni text-[6vw] font-semibold leading-[6vw] text-transparent">
          {{ image.subtitle }}
        </h6>
        <p :id="`gallery-info-category`" class="mt-5 font-bai text-2xl font-normal leading-6">
          {{ image.category }}
        </p>
      </div>

      <div
        ref="itemImage"
        :style="{ backgroundImage: `url(${image.src})` }"
        class="gallery-item-image absolute bottom-0 right-0 z-0 h-full w-4/5 bg-cover bg-center will-change-transform"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.gallery-info-subtitle {
  -webkit-text-stroke: 2px rgb(229, 229, 229);
}
</style>
