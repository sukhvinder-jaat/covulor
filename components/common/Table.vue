<template>
  <div>
    <div class="overflow-x-hidden">
      <div class="w-full overflow-x-auto min-[1160px]:max-w-[833px] lg:max-w-[700px] min-[1250px]:max-w-full pb-2">
        <table class="bg-[#F5F7FB] w-full">
          <thead class="ps-5">
            <tr class="bg-hawkasBlue border border-[#D4D7DD]">
              <th v-for="(heading, index) in header" :key="index" scope="col"
                class="py-4 px-5 uppercase tracking-[5%] bg-hawkasBlue text-center font-roboto font-semibold text-xs text-midnightBlue text-nowrap">
                <div class="flex justify-center items-center">
                  <span :class="index === 0 ? 'block me-1' : 'hidden'">
                    <IconsTableUpDown />
                  </span>
                  {{ heading }}
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200 text-center">
            <slot />
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex justify-end mb-5 repo_pagination">
      <CommonPagination :page="page" :pageSize="pageSize" :pageNumberHandler="pageNumberHandler"
        :totalDocuments="255" />
      <!-- <UPagination v-model="page" :page-count="5" :total="items.length" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import Pagination from './Pagination.vue';

defineProps({
  header: Array,
});
const page = ref(1);
const pageSize = ref(55);
const pageNumberHandler = (pages: number) => {
  page.value = pages;
  navigateTo(`?page=${pages}`)
  console.log(page.value, "page");

};
</script>

<style>
.repo_pagination button {
  box-shadow: none !important;
  border: none;
  /* color: #6e6893; */
}

.repo_pagination button.bg-white {
  background-color: transparent;
}
</style>
