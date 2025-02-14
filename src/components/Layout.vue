<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import SidebarDrawer from "./SidebarDrawer.vue";
import { ref } from "vue";

const open = ref(false);

const showDrawer = () => {
  open.value = true;
};
</script>

<template>
  <div class="bg-[#E1E1E1] h-screen fixed w-full">
    <div
      class="w-full h-16 bg-[#212131] border-b border-white flex items-center justify-between px-4"
    >
      <img
        src="../assets/menu.png"
        alt="menu"
        class="w-10 h-10 lg:hidden"
        @click="showDrawer"
      />

      <h1 class="text-white font-bold text-4xl">Riservi</h1>

      <img src="../assets/user.png" alt="menu" class="w-10 h-10" />
    </div>

    <div class="flex w-full h-screen">
      <SidebarDrawer :open="open" @close="open = false" />
      <div
        class="flex-col w-64 h-screen bg-[#212131] p-4 gap-4 border-r border-white hidden lg:flex"
      >
        <Sidebar />
      </div>
      <div
        class="flex flex-col w-full h-screen p-4 scroll-auto overflow-y-auto pb-32"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
