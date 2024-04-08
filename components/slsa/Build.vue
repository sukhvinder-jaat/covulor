<template>
  <!-- Main container with flex layout -->
  <div class="flex flex-wrap w-full mb-[25px]">
    <!-- Container for Build Threats -->
    <div class="xl:w-[80%] w-full xl:pe-[18px]">
      <!-- Border and heading for Build Threats -->
      <div class="border-b border-lightBlue ps-[13px] pb-2">
        <Heading title="Build Threats" :isSubHeading="true" />
      </div>
      <!-- Container for individual build threats -->
      <div
        class="mt-[38px] xl:mb-0 mb-6 xl:gap-y-10 xl:gap-x-10 xl:flex-nowrap justify-center gap-y-6 w-full flex flex-wrap"
        v-for="(content, index) in buildThreats"
        :class="
          index === 0
            ? '!xl:pl-0'
            : '' || index === buildThreats.length - 1
            ? '!xl:pr-0 !xl:pe-0'
            : ''
        "
        :key="index"
      >
        <!-- Looping through buildThreats and rendering Card components -->
        <div
          v-for="(value, i) in content.findings"
          :key="i"
          class="xl:w-3/12 md:w-4/12 xl:px-0 px-3 small:w-6/12 w-full h-full min-h-[205px]"
        >
          <Card
            :type="content.type"
            :title="value.title"
            :rank="value.count"
            :growth="value.growth"
          />
        </div>
      </div>
    </div>

    <!-- Container for Dependencies Threats -->
    <div class="xl:w-[20%] flex flex-col items-center w-full xl:ps-[18px]">
      <!-- Border and heading for Dependencies Threats -->
      <div
        class="border-b border-lightGreen w-full pb-2 xl:ps-0 ps-[13px] text-center"
      >
        <Heading title="Dependencies Threats" :isSubHeading="true" />
      </div>
      <!-- Looping through dependenciesThreats and rendering Card components -->
      <div
        v-for="(content, index) in dependenciesThreats"
        class="xl:w-full md:w-4/12 xl:px-0 px-3 small:w-6/12 w-full mt-[38px]"
        :key="index"
      >
        <div class="w-full h-full min-h-[205px]">
          <Card
            :type="content.type.toLowerCase()"
            :title="content.findings[0].title"
            :rank="content.findings[0].count"
            :growth="content.findings[0].growth"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Heading from "../common/Heading.vue";
import { buildThreats, dependenciesThreats } from "../../utils/helper"; // Importing buildThreats and dependenciesThreats from helper file
import Card from "./Card.vue"; // Importing Card component
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const getSlsaThreatsDataHandler = async () => {
  // Function to fetch software chain data
  await fetchRequestHandler(get, `${SLSA_THREATS}?threat_type=${BUILD}`);
  await fetchRequestHandler(get, `${SLSA_THREATS}?threat_type=${DEPENDENCIES}`);
};

// Lifecycle hook for component mounted
onMounted(async () => {
  try {
    await getSlsaThreatsDataHandler();
  } catch (e: any) {
    // Display an error toast if an exception occurs
    toast.error(e.message, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
});
</script>
