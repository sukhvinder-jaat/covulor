<template>
  <div class="my-[35px]">
    <CommonTable :header="heading">
      <tr
        v-for="repo in repos"
        :key="repo.id"
        class="hover:bg-white bg-[#F5F7FB] transition-all ease-in-out duration-150 border border-[#D4D7DD]"
      >
        <td class="px-3 py-4 whitespace-nowrap">
          <p class="font-roboto font-medium text-lg text-lightToBlack">
            {{ repo.id }}
          </p>
        </td>
        <td class="px-3 py-4 whitespace-nowrap">
          <p
            class="flex items-center gap-x-[3px] text-sm font-roboto font-medium text-lightGreen"
            :class="
              repo.priority < 50
                ? '!text-turquoiseBlue'
                : repo.priority < 80
                ? '!text-lawnGreen'
                : repo.priority > 80 && 'text-lightGreen'
            "
          >
            <UProgress
              :value="repo.priority"
              :color="
                repo.priority < 50
                  ? 'turquoiseBlue'
                  : repo.priority < 80
                  ? 'lawnGreen'
                  : repo.priority > 80 && 'lightGreen'
              "
            />
            {{ repo.priority }}
          </p>
        </td>
        <td class="px-3 py-4 whitespace-nowrap">
          <p class="text-sm font-roboto font-medium text-lightToBlack">
            {{ repo.title }}
          </p>
        </td>
        <td class="px-3 py-4 whitespace-nowrap">
          <p class="text-sm font-roboto font-medium text-lightToBlack">
            {{ repo.chain }}
          </p>
        </td>
        <td class="px-3 py-4 whitespace-nowrap">
          <p class="text-sm font-roboto font-medium text-lightToBlack">
            {{ repo.repo }}
          </p>
        </td>
        <td class="px-3 py-4 whitespace-nowrap">
          <p class="text-sm font-roboto font-bold text-midnightBlue">
            {{ repo.owner }}
          </p>
        </td>
        <td class="px-3 py-4 whitespace-nowrap">
          <p class="text-sm font-roboto font-bold text-midnightBlue">
            {{ repo.type }}
          </p>
        </td>
        <td class="px-3 py-4 whitespace-nowrap">
          <p
            class="flex items-center gap-x-[3px] text-sm font-roboto font-medium text-lightGreen"
            :class="
              repo.confidence < 50
                ? '!text-turquoiseBlue'
                : repo.confidence < 80
                ? '!text-lawnGreen'
                : repo.confidence > 80 && 'text-lightGreen'
            "
          >
            <UProgress
              :value="repo.confidence"
              :color="
                repo.confidence < 50
                  ? 'turquoiseBlue'
                  : repo.confidence < 80
                  ? 'lawnGreen'
                  : repo.confidence > 80 && 'lightGreen'
              "
            />
            {{ repo.confidence }}
          </p>
        </td>
        <td class="px-3 py-4 whitespace-nowrap">
          <p class="text-sm font-roboto font-bold text-midnightBlue">
            {{ repo.date }}
          </p>
        </td>
        <td class="px-3 py-4 whitespace-nowrap">
          <NuxtLink
            class="text-lightToBlack font-roboto font-medium text-xs py-[2px] px-2 bg-hawkasBlue group transition-all ease-in-out duration-300 hover:bg-[#8220FF] rounded-xl flex items-center gap-x-1 justify-center hover:text-white"
            :to="repo.path"
            >View
            <IconsViewArrow />
          </NuxtLink>
        </td>
      </tr>
    </CommonTable>
  </div>
</template>
<script setup lang="ts">
const heading = [
  "FINDING ID",
  "PRIORITY",
  "TITLE",
  "SUPPLY CHAIN",
  "repository",
  "Issue owner",
  "TYPE",
  "CONFIDENCE",
  "DATE",
  "",
];
const repos = [
  {
    id: 1.658,
    priority: 10,
    title: "iPlexicus/-OWASPWebGoatPHP",
    chain: "SAST",
    repo: "plexicus/AltoroJ",
    owner: "Developer 1",
    type: "Code Weakness",
    path: "#",
    confidence: 75,
    date: "2024/12/25",
    tagsOption: ["Financial", "Insurance", "Energy"],
  },
];
</script>
