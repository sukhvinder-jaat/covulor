<template>
  <div class="overflow-x-hidden mb-10">
    <div
      class="w-full overflow-x-auto min-[1160px]:max-w-[833px] lg:max-w-[700px] min-[1250px]:max-w-[1000px] pb-2"
    >
      <table class="bg-[#F5F7FB] min-w-[903px] w-full">
        <thead class="ps-5">
          <tr class="bg-hawkasBlue border border-[#D4D7DD]">
            <th
              v-for="(heading, index) in header"
              :key="index"
              scope="col"
              class="py-4 px-5 uppercase tracking-[5%] bg-hawkasBlue text-center font-roboto font-semibold text-xs text-midnightBlue text-nowrap"
            >
              <div class="flex justify-center items-center">
                <span :class="index === 0 ? 'block me-1' : 'hidden'"
                  ><IconsTableUpDown />
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
</template>

<script setup lang="ts">
defineProps({
  header: Array,
});
</script>
