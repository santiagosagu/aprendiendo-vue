<template>
  <div className="flex flex-col gap-2">
    <div className="flex flex-col gap-6">
      <RouterLink to="/" class="text-white text-md font-semibold"
        >Dashboard</RouterLink
      >
      <RouterLink to="/about" class="text-white text-md font-semibold"
        >About</RouterLink
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
