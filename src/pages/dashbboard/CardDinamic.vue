<template>
  <div
    class="flex flex-wrap min-w-[300px] gap-4 m-5 flex-1 h-[200px] justify-between items-center rounded-lg p-4 shadow-md px-8"
    :style="{ backgroundColor: color }"
  >
    <div class="flex flex-col gap-4">
      <p class="text-white text-md font-sidebar font-semibold text-5xl">
        {{ value }}
      </p>
      <p class="text-white text-md font-sidebar font-semibold">
        {{ title }}
      </p>
    </div>
    <img :src="getIconPath(icon)" :alt="title" class="w-16 h-16" />
  </div>
</template>

<script setup>
const getIconPath = (icon) => {
  return new URL(`../../assets/${icon}.png`, import.meta.url).href;
};

const props = defineProps({
  title: String,
  value: Number,
  icon: String,
  color: String,
});
</script>
