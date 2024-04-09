<template>
  <!-- TODO Style pagination right. The design is not right. -->
  <div class="py-4" v-if="pagesArray.length > 1">
    <div class="text-end flex justify-center">
      <!-- Page numbers -->
      <div class="overflow-auto">
        <div
          class="flex items-center gap-[6px] sm:mx-[18px] justify-center max-w-[320px] sm:max-w-full mx-auto"
        >
          <button
            :disabled="pageNumber === '...' ? true : false"
            v-for="pageNumber in pagesArray"
            :key="pageNumber"
            :class="{
              ' text-purple ': pageNumber === page,
              '': true,
            }"
            class="text-xs py-[11px] px-2 rounded-md font-medium"
            @click="pageNumber !== '...' ? pageNumberHandler(pageNumber) : null"
          >
            {{ pageNumber }}
          </button>
        </div>
      </div>
      <!-- previus -->
      <button
        :disabled="page === 1 ? true : false"
        @click="pageNumberHandler(page - 1)"
        :class="
          page === 1
            ? 'cursor-not-allowed bg-transparent'
            : 'hover:opacity-70 bg-darkBlue text-purple'
        "
        class="p-[11px_10.5px_11px_8.5px] rounded-md text-sm text-rumPurple font-medium font-inter ease-in-out hover:text-purple duration-300 btn-box-shadow items-center flex ms-3"
      >
        <span><</span>
      </button>
      <!-- Next Button -->

      <button
        :class="
          page === pageCount
            ? 'opacity-75 cursor-not-allowed text-purple'
            : 'hover:opacity-70 bg-darkBlue '
        "
        class="p-[11px_8.5px_11px_10.5px] rounded-md text-sm font-medium font-inter ease-in-out duration-300 hover:text-purple flex items-center ms-5"
        :disabled="page === pageCount ? true : false"
        @click="pageNumberHandler(page + 1)"
      >
        <span>></span>
        <component
          :is="ChevronRightIcon"
          class="w-4 h-4 text-gray500 ml-2"
          :class="page === pageCount ? 'text-gray500' : 'text-purple'"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  page: Number,
  pageSize: Number,
  pageNumberHandler: Function,
  totalDocuments: Number,
});

const pageCount = computed(() => {
  return Math.ceil(props.totalDocuments / props.pageSize);
});

const pagesArray = computed(() => {
  const pages = [];
  // Use the validated props for calculations
  const totalPageCount = pageCount.value;

  // The maximum number of pages to show before and after the current page
  const maxAdjacentPages = 1;

  // Always add the first page
  pages.push(1);

  // Calculate the start and end range of pages to show around the current page
  let start = Math.max(props.page - maxAdjacentPages, 2);
  let end = Math.min(props.page + maxAdjacentPages, totalPageCount - 1);

  // Add ellipsis before the start if there are skipped pages
  if (start > 2) {
    pages.push("...");
  }

  // Add the pages within the range
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Add ellipsis after the end if there are skipped pages
  if (end < totalPageCount - 1) {
    pages.push("...");
  }

  // Always add the last page
  if (totalPageCount > 1) {
    pages.push(totalPageCount);
  }

  return pages;
});
</script>
