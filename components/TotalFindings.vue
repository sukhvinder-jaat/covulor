<template>
  <!-- Container for the card -->
  <div id="report" class="bg-white px-3 py-6 lg:p-6 rounded-lg mt-2">
    <!-- Header section  -->
    <div class="flex items-center flex-wrap justify-between">
      <!-- Custom chart heading component -->
      <CommonChartHeading
        iconUrl="/assets/Icons/Item.svg"
        heading="Total Findings"
      />
      <div class="inline-block pt-2">
        <USelectMenu
          v-model="selected"
          :options="year"
          placeholder="Last Year"
          class="border border-1 border-iron pb-[6px] pt-1 px-2 sm:py-[6px] sm:px-3 rounded"
        />
      </div>
    </div>
    <!-- Chart section -->
    <div
      class="mt-7 flex items-center justify-between flex-col xl:flex-row overflow- x-hidden"
    >
      <div class="overflow-x-auto w-[300px] min-[500px]:w-[430px] sm:w-full">
        <div
          class="overflow-x-auto overflow-y-hidden w-[650px] min-[500px]:w-[650px] sm:w-full relative"
        >
          <DashboardFunnelChart />
        </div>
      </div>
      <!-- Finding circular chart component -->
      <div
        class="w-full mt-6 lg:mt-0 lg:w-[345px] 2xl:w-[450px] flex justify-center"
      >
        <DashboardCircularChart />
      </div>
      <CommonTable />
    </div>
  </div>
  <!-- <CommonTable :rows="heading" :columns="data" /> -->
</template>

<script setup lang="ts">
const year = ["2023", "2022", "2021", "2020"];

const selected = ref(year[0]);
const heading = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "User name",
  },
  {
    key: "title",
    label: "Job position",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "role",
  },
];

const data = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 2,
    name: "Courtney Henry",
    title: "Designer",
    email: "courtney.henry@example.com",
    role: "Admin",
  },
  {
    id: 3,
    name: "Tom Cook",
    title: "Director of Product",
    email: "tom.cook@example.com",
    role: "Member",
  },
  {
    id: 4,
    name: "Whitney Francis",
    title: "Copywriter",
    email: "whitney.francis@example.com",
    role: "Admin",
  },
  {
    id: 5,
    name: "Leonard Krasner",
    title: "Senior Designer",
    email: "leonard.krasner@example.com",
    role: "Owner",
  },
  {
    id: 6,
    name: "Floyd Miles",
    title: "Principal Designer",
    email: "floyd.miles@example.com",
    role: "Member",
  },
];
</script>
