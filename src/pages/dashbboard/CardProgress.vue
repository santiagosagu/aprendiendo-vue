<template>
  <div class="max-w-4xl mx-4 bg-amber-50 rounded-lg mt-10">
    <div class="bg-[#212131] shadow rounded-t-lg p-2">
      <p class="text-white font-bold pl-2">Progress</p>
    </div>
    <div class="md:flex flex-wrap gap-4 w-full justify-between p-2">
      <div class="flex flex-col flex-1">
        <p class="mb-4 font-bold pl-2">Mes Anterior</p>
        <div
          class="flex items-center gap-2 mb-2 p-2"
          v-for="item in progress"
          :key="item.title"
        >
          <p>{{ item.title }}</p>
          <a-progress
            :percent="item.value"
            :stroke-color="{
              '0%': item.color,
              '100%': item.color,
            }"
          />
        </div>
      </div>
      <div class="flex flex-col flex-1">
        <p class="mb-4 font-bold pl-2">Mes Actual</p>
        <div
          class="flex items-center gap-2 mb-2 p-2"
          v-for="item in progressMore"
          :key="item.title"
        >
          <p>{{ item.title }}</p>
          <a-progress
            :percent="item.value"
            :stroke-color="{
              '0%': item.color,
              '100%': item.color,
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  progress: Array,
  progressMore: Array,
});
</script>
