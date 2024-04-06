<template>
  <div class="flex justify-between sm:items-center gap-y-5 sm:flex-row flex-col">
    <div class="ps-2.5">
      <h2
        class="font-roboto font-bold text-xl sm:text-2xl xl:text-3xl text-midnightBlue tracking-[-.62px] pb-[14px]"
      >
        {{ title }}
      </h2>
      <span
        :class="
          tagfirst.bgColor +
          ' me-[14px] text-center w-[121px] py-1.5 rounded-full text-white font-roboto font-normal text-[13px] inline-block'
        "
        >{{ tagfirst.text }}</span
      >
      <span
        :class="
          tagsecond.bgColor +
          ' me-[14px] text-center w-[121px] py-1.5 rounded-full text-white font-roboto font-normal text-[13px] inline-block'
        "
        >{{ tagsecond.text }}</span
      >
    </div>
    <div :class="hideText + ' flex items-center gap-1 ps-2.5 sm:ps-0'">
      <p
        class="font-roboto font-normal lg:text-[25px] sm:text-lg text-base text-midnightBlue tracking-[-2%]"
      >
        Prioritization Value:
      </p>
      <span class="text-comet font-roboto font-bold lg:text-[25px] sm:text-lg text-base">0/100</span>
    </div>
  </div>
  <div class="px-10 py-10 bg-white flex justify-between md:flex-row flex-col mt-[22px] w-full mb-11">
    <div class="md:w-1/2 md:max-w-[467px] xl:ms-1">
      <h2 class="font-roboto text-midnightBlue font-bold text-[28px] !tracking-[-2%] pb-[15px]">
        {{ remediationTitle }}
      </h2>
      <p
        class="font-roboto text-black text-sm font-normal !tracking-[-2%] leading-[19px]"
      >
        {{ remediationDescription }}
      </p>
      <p class="font-bold font-roboto text-xl pt-2 text-purple">More Details</p>
    </div>
    <div class="sm:w-[250px] md:pt-0 pt-5">
      <UButton color="primary" size="xs" block variant="solid">
        <span class="font-roboto font-normal text-xl tracking-[-.4px]">{{
          buttonText
        }}</span>
      </UButton>
      <p class="text-center pt-2.5 tracking-[-.28px] font-roboto font-normal text-purple text-sm">
        {{ remediationDetails }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String as () => string,
      required: true,
    },
    tagfirst: {
      type: Object as () => { text: string; bgColor: string },
      required: true,
    },
    tagsecond: {
      type: Object as () => { text: string; bgColor: string },
      required: true,
    },
    hideText: {
      type: String as () => string,
      required: true,
    },
    buttonText: {
      type: String as () => string,
      required: true,
    },
    remediationTitle: {
      type: String as () => string,
      required: true,
    },
    remediationDescription: {
      type: String as () => string,
      required: true,
    },
    remediationDetails: {
      type: String as () => string,
      required: true,
    },
  },
});
</script>
