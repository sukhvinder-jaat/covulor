<template>
  <div
    class="border border-1 border-lightGainsBor rounded-lg mt-3 sm:mt-6 xl:mt-0"
  >
    <div class="flex justify-center flex-wrap relative pt-3 sm:pt-0">
      <div
        v-for="(value, index) in chartProgressBar"
        :key="index"
        class="w-full sm:w-4/12 p-4 md:p-6 text-center flex"
        :class="routes.fullPath === '/' ? ' flex-col' : 'flex-col-reverse'"
      >
        <p
          class="font-poppins text-sm text-midnightBlue flex justify-center items-center gap-1"
        >
          <span
            class="w-[14px] h-[15px] rounded-[5px] block"
            :class="getIndicatorClass(value.title)"
          ></span>
          <span class="opacity-70">{{ value.title }}</span>
        </p>
        <div>
          <p
            class="font-roboto font-semibold text-midnightBlue text-4xl leading-[42px] mt-3 my-3"
          >
            {{ value.rank }}
          </p>
          <div
            class="bg-lightGainsBor max-w-[272px] w-full h-1 rounded-2xl mx-auto mb-[18px]"
            :class="getProgressBarClass(value.title)"
          >
            <UProgress
              :value="value.rankPercentage"
              size="sm"
              :color="getProgressBarColor(value.title)"
            />
          </div>
        </div>
      </div>
      <span
        v-for="position in ['left', 'right']"
        :key="position"
        class="h-[72px] w-[1px] md:block bg-lightGainsBor absolute top-[30px] hidden"
        :class="[position === 'left' ? 'left-[33.5%]' : 'right-[33.5%]']"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
const routes = useRoute();
console.log(routes.fullPath, "route");
import {
  FINDINGS,
  READY_TO_REMEDIATE,
  FINDING_WITHOUT_ACTION_PLAN,
  FINDING_WITH_ACTION_PLAN,
} from "../../utils/const";
defineProps({
  chartProgressBar: Array,
});

const getIndicatorClass = (title: string) => {
  switch (true) {
    case title === FINDINGS || title === FINDING_WITHOUT_ACTION_PLAN:
      return "bg-lawnGreen";
    case title === READY_TO_REMEDIATE || title === FINDING_WITH_ACTION_PLAN:
      return "bg-purple";
  }
};
const getProgressBarColor = (title: string) => {
  switch (true) {
    case title === FINDINGS || title === FINDING_WITHOUT_ACTION_PLAN:
      return "orange";
    case title === READY_TO_REMEDIATE || title === FINDING_WITH_ACTION_PLAN:
      return "violet";
  }
};

const getProgressBarClass = (title: string) => {
  return {
    "bg-lawnGreen": title === FINDINGS || title === FINDING_WITHOUT_ACTION_PLAN,
    "bg-lightGainsBor":
      title === READY_TO_REMEDIATE || title === FINDING_WITH_ACTION_PLAN,
    hidden: title === "Total Findings",
  };
};
</script>
