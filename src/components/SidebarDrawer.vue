<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  open: Boolean,
});

const emit = defineEmits(["close"]);
</script>

<template>
  <a-drawer
    :open="open"
    class="custom-class text-white"
    :closable="false"
    root-class-name="root-class-name"
    :root-style="{ color: 'white' }"
    style="color: red"
    placement="left"
    @update:open="emit('close')"
  >
    <template #title>
      <div class="bg-[#212131] p-4 text-white">Menu</div>
    </template>
    <div className="flex flex-col gap-6">
      <RouterLink to="/" class="text-white text-md font-semibold"
        >Dashboard</RouterLink
      >
      <RouterLink to="/about" class="text-white text-md font-semibold"
        >About</RouterLink
      >
    </div>
  </a-drawer>
</template>
