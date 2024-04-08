<template>
  <div class="mt-[35px]">
    <CommonTable :header="heading">
      <tr
        v-for="repo in repos"
        :key="repo.id"
        class="hover:bg-white bg-[#F5F7FB] transition-all ease-in-out duration-150"
      >
        <td class="px-5 py-4 whitespace-nowrap pointer-events-none">
          <p></p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
          <p class="font-roboto font-medium text-lg text-lightToBlack">
            {{ repo.id }}
          </p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
          <p class="text-sm font-roboto font-bold text-midnightBlue">
            {{ repo.sourceControl }}
          </p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
          <p class="text-sm font-roboto font-medium text-lightToBlack">
            {{ repo.repo }}
          </p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
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
        <td class="px-5 py-4 whitespace-nowrap">
          <!-- popup -->
          <UPopover class="table_popup">
            <div
              label="Open"
              class="bg-[#F3D8A6] flex gap-x-2 pe-2 max-h-[25px] h-full max-w-[119px] rounded-[10px] items-center w-full"
            >
              <p
                class="text-white bg-lawnGreen font-medium font-roboto text-xs px-2 h-full rounded-[10px] w-full"
              >
                {{ repo.tags }}
              </p>
              <IconsPlus />
            </div>

            <template #panel="{ close }">
              <div class="relative">
                <span
                  label="Close"
                  @click="close"
                  class="top-[-12%] end-[-7%] absolute cursor-pointer"
                >
                  <IconsPopupCross />
                </span>
                <div
                  class="bg-lawnGreen p-[14px] ps-7 min-w-[154px] rounded-md"
                >
                  <ul
                    class="list-disc flex flex-col gap-y-2 items-start justify-start"
                  >
                    <li
                      class="font-roboto text-white font-medium text-sm"
                      v-for="(tagOption, i) in repo.tagsOption"
                      :key="i"
                    >
                      {{ tagOption }}
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </UPopover>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
          <p class="text-sm font-roboto font-bold text-midnightBlue">
            {{ repo.branch }}
          </p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
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
  "",
  "REPOSITORY ID",
  "SOURCE CONTROL",
  "REPO",
  "PRIORITY",
  "TAGS",
  "BRANCH",
  "",
];
const repos = [
  {
    id: 56,
    sourceControl: "Github",
    repo: "iPlexicus/-OWASPWebGoatPHP",
    priority: 75,
    tags: "Financial",
    branch: "Master",
    path: "#",
    tagsOption: ["Financial", "Insurance", "Energy"],
  },
  {
    id: 54,
    sourceControl: "Github",
    repo: "plexicus/AltoroJ",
    priority: 30,
    tags: "Insurance",
    branch: "Master",
    tagsOption: ["Financial", "Insurance", "Energy"],
    path: "#",
  },
  {
    id: 51,
    sourceControl: "Github",
    repo: "plexicus/-simple-vulnerable",
    priority: 95,
    tags: "Energy",
    branch: "Main",
    tagsOption: ["Financial", "Insurance", "Energy"],
    path: "#",
  },
];
</script>
