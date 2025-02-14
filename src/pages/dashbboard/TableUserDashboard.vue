<template>
  <div class="rounded-lg">
    <div class="bg-[#212131] shadow rounded-t-lg p-2">
      <p class="text-white font-bold pl-2">Principales Usuarios</p>
    </div>

    <p v-if="isLoading" class="text-center">Cargando datos...</p>
    <p v-else-if="error" class="text-red-500 text-center">
      Error al cargar datos
    </p>

    <a-table
      v-else
      :dataSource="data?.results || []"
      :columns="columns"
      :pagination="false"
    />
  </div>
</template>

<script setup>
import { h, ref, watchEffect } from "vue";
import { useFetchApi } from "../../api/useFetchApi";

const { data, isLoading, error } = useFetchApi();

const columns = ref([
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
    customRender: ({ record }) => {
      return h("div", { class: "flex items-center gap-2" }, [
        h("img", {
          src: record.image,
          alt: record.name,
          class: "w-10 h-10 rounded-full",
        }),
        h("p", { class: " text-md font-semibold" }, record.name),
      ]);
    },
  },
  {
    title: "Estatus",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Especie",
    dataIndex: "species",
    key: "species",
  },
]);

watchEffect(() => {
  console.log("Datos de la API:", data.value);
});
</script>
