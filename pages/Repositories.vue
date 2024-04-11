<template>
  <div class="lg:pl-[54px] lg:pr-[63px] md:px-10 px-3 sm:px-5 pt-[36px] w-full">
    <RepositoriesHeader />
    <CommonTableDataControlBar />
    <RepositoriesTable :RepositoriesList="RepositoriesList.data" />
  </div>
</template>
<script setup lang="ts">
// Page Meta
definePageMeta({
  layout: "home",
});

import { ref, onMounted } from "vue";

// Define reactive variables for pagination
const page = ref(1);
const pageSize = ref(10); // Set your desired page size

// Function to handle page number changes
const pageNumberHandler = (pageNum: number) => {
  page.value = pageNum;
  navigateTo(`?page=${pageNum}`); // Update URL with the new page number
  getRepositoriesDataList(); // Fetch data for the new page
};


const toast = useToast()
const RepositoriesList = ref({ loaded: false, data: {} });

const getRepositoriesDataList = async () => {
  try {
    const response = await fetchRequestHandler(get, `${REPOSITORIES_LIST}/7?pagination_page=${page.value}&pagination_pageSize=${pageSize.value}`);
    RepositoriesList.value = { loaded: true, data: response.data };
  } catch (e: any) {
    // Display an error toast if an exception occurs
    toast.add({
      title: e.message,
    });
  }
};

onMounted(getRepositoriesDataList); // Fetch data on component mount

</script>

<style setup>
#headlessui-popover-panel-ndcv2Y3vSTA_23 {
  overflow: visible !important;
}
</style>