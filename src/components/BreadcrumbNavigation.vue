<template>
  <div
    class="h-12 flex w-full shadow-sm rounded-lg bg-gray-100 items-center mb-8 relative overflow-hidden"
  >
    <div class="absolute px-2 right-0 min-w-full flex flex-row items-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadcrumbNavigation",
};
</script>
