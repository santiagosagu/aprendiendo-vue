<script setup>
import CardDinamic from "./CardDinamic.vue";
import { ref } from "vue";
import CardProgress from "./cardProgress.vue";
import CardDinamicCircularProgress from "./CardDinamicCircularProgress.vue";
import TableUserDashboard from "./tableUserDashboard.vue";

const cardsData = ref([
  { title: "Total Users", value: 1000, icon: "group", color: "#f56565" },
  {
    title: "Total Sessions",
    value: 4000,
    icon: "line-chart",
    color: "#ADD8E6",
  },
  { title: "Total Pageviews", value: 3000, icon: "view", color: "#E6E6" },
]);

const cardProgress = ref([
  { title: "Usuarios", value: 30, color: "#f56565" },
  { title: "Pendientes", value: 50, color: "#ADD8E6" },
  { title: "Proveedores", value: 70, color: "#E6E6" },
  { title: "Ventas", value: 100, color: "#98FB98" },
]);

const cardProgressMore = ref([
  { title: "Usuarios", value: 40, color: "#f56565" },
  { title: "Pendientes", value: 60, color: "#ADD8E6" },
  { title: "Proveedores", value: 20, color: "#E6E6" },
  { title: "Ventas", value: 80, color: "#98FB98" },
]);

const cardCircularProgress = ref([
  { title: "Usuarios", value: 30, icon: "users", color: "#f56565" },
  { title: "Pendientes", value: 50, icon: "user", color: "#ADD8E6" },
  { title: "Proveedores", value: 70, icon: "eye", color: "#E6E6" },
  { title: "Ventas", value: 100, icon: "user", color: "#98FB98" },
]);
</script>

<template>
  <h2 class="text-4xl font-medium mb-8 ml-3.5">Dashboard</h2>
  <div class="flex flex-wrap">
    <CardDinamic
      v-for="card in cardsData"
      :key="card.title"
      :title="card.title"
      :value="card.value"
      :icon="card.icon"
      :color="card.color"
    />
  </div>
  <div class="md:flex mt-8">
    <div class="flex flex-col md:w-[50%]">
      <CardProgress :progress="cardProgress" :progressMore="cardProgressMore" />
      <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
        <CardDinamicCircularProgress
          v-for="card in cardCircularProgress"
          :progress="card.value"
          :key="card.title"
          :title="card.title"
          :color="card.color"
        />
      </div>
    </div>
    <div class="w-full flex-1 mt-10">
      <TableUserDashboard />
    </div>
  </div>
</template>
