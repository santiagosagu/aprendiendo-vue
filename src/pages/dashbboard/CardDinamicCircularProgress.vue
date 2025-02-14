<template>
  <div class="w-[300px] mx-4 rounded-lg mt-10 h-[350px] bg-white">
    <div class="bg-[#212131] shadow rounded-t-lg p-2">
      <p class="text-white font-bold pl-2">Progress</p>
    </div>
    <div class="justify-center flex flex-col items-center h-full py-4">
      <a-progress
        type="circle"
        :stroke-color="{
          '0%': color,
          '100%': color,
        }"
        :percent="progress"
      />
      <p class="mt-4 text-xl font-bold">{{ title }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  progress: Number,
  card: String,
  title: String,
  color: String,
});
</script>
