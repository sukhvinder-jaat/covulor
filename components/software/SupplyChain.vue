<template>
  <div class="pb-[50px] sm:pb-[81px] sm:pt-10">
    <!-- Custom Heading for the Software Supply Chain -->
    <CommonHeading id="software" :icon="github" title="SOFTWARE SUPPLY CHAIN" />
    <!-- Pass the supplyChainCharts array as a prop to the SoftwareCards component -->
    <SoftwareCards :chartData="supplyChainChart" />
  </div>
</template>

<script setup lang="ts">
import github from "../../public/assets/Icons/git_hub.svg";
import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';


const getSoftwareChainDataHandler = async () => {
  // Function to fetch software chain data
  await fetchRequestHandler(get, `${SOFTWARE_SUPPLY_CHAIN}`);
}

// Lifecycle hook for component mounted
onMounted(async () => {
  try {
    await getSoftwareChainDataHandler();
  } catch (e: any) {
    // Display an error toast if an exception occurs
    toast.error(e.message, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
})
</script>
