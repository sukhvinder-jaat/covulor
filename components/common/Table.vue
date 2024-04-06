<template>
  <div class="overflow-hidden">
    <div class="w-full overflow-x-auto xl:max-w-full max-w-[1073px]">
      <table class="bg-[#F5F7FB] min-w-[1073px] w-full">
        <thead class="ps-5">
          <tr class="bg-hawkasBlue">
            <th
              v-for="(heading, index) in header"
              :key="index"
              scope="col"
              class="py-4 px-5 uppercase tracking-[5%] bg-hawkasBlue text-center font-roboto font-semibold text-xs text-midnightBlue"
            >
              <span :class="index === 0 ? 'block' : 'hidden'"
                ><svg
                  width="26"
                  height="16"
                  viewBox="0 0 26 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 3L9.31458 7.875L12.1292 12.75H6.5H0.870835L3.68542 7.875L6.5 3Z"
                    fill="#8220FF"
                  />
                  <path
                    opacity="0.5"
                    d="M19.5 13L16.6854 8.125L13.8708 3.25L19.5 3.25L25.1292 3.25L22.3146 8.125L19.5 13Z"
                    fill="#8220FF"
                  />
                </svg>
              </span>
              {{ heading }}
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200 text-center">
          <slot />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  header: Array,
});
</script>
