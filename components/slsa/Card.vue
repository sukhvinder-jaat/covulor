<template>
  <!-- Container with dynamic classes based on 'type' prop -->
  <div
    class="rounded-[37px] border border-pastelGrey bg-white shadow-[0px_0px_30px_0px_inset] pt-[19px] flex flex-col justify-between items-center pb-[13px] hover:scale-95 transition-all ease-in-out duration-300 max-w-[285px] sm:mx-0 mx-auto"
    :class="getCardColor(type)">
    <!-- SVG icon with dynamic fill color -->
    <span class="mb-[14px]">
      <UserProfile :type="type" />
    </span>
    <p class="text-dusk text-center font-epilogue text-sm font-normal leading-[103%] max-w-[143px] w-full">
      {{ title }}
    </p>

    <!-- Rank paragraph -->
    <p class="text-riverBed text-center font-epilogue text-3xl font-bold leading-[normal] my-[15px]">
      {{ rank }}
    </p>
    <!-- Text indicating time period -->
    <p class="text-pinkSwan text-center font-epilogue text-xs font-normal leading-[normal] mb-[5px]">
      This Month
    </p>
    <!-- Growth percentage -->
    <p class="text-center font-epilogue text-xs font-bold leading-[normal] text-greeny">
      +{{ growth }}%
    </p>
  </div>
</template>
<script setup lang="ts">
import UserProfile from "../icons/UserProfile.vue";
import { BUILD, DEPENDENCIES, SOURCE } from '../../utils/const'

const getCardColor = (type: string) => {
  switch (true) {
    case type === BUILD: return 'shadow-[rgba(96,_91,_255,_0.17)]'
    case type === DEPENDENCIES: return 'shadow-[rgba(5,_203,_12,_0.23)]'
    case type === SOURCE: return 'shadow-[rgba(238,_157,_1,_0.34)]'
  }
};

// Define component props
defineProps({
  title: {
    type: String,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
  growth: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
