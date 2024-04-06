<template>
  <!-- Container with dynamic classes based on 'type' prop -->
  <div
    :class="[
      'rounded-2xl border',
      type === 'red'
        ? 'shadow-[0px_0px_30px_0px_#FF00005C]'
        : 'shadow-[0px_0px_30px_0px_#05CB0C3B]',
      'pt-[50px] flex flex-col justify-between items-center pb-[22px] hover:scale-95 transition-all ease-in-out duration-300 max-w-[285px] sm:mx-0 mx-auto',
    ]"
  >
    <!-- SVG icon with dynamic fill color -->
    <span
      :class="[
        'w-10 h-10 flex justify-center items-center rounded-lg',
        type === 'red' ? 'bg-red' : 'bg-lightGreen',
      ]"
    >
      <MultipleUsers />
    </span>
    <p
      class="text-dusk text-center font-epilogue pt-[26px] text-sm font-normal leading-[103%] max-w-[143px] w-full"
    >
      {{ title }}
    </p>
  </div>
</template>

<script setup lang="ts">
import MultipleUsers from "../icons/MultipleUsers.vue";

// Define component props
defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "green", // Set default type to 'green'
  },
});
</script>

<style scoped>
/* Define custom classes for red border and background */
.border-red {
  border-color: red;
}
.bg-red {
  background-color: red;
}
</style>
