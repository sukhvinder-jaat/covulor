<template>
  <div class="mt-[35px]">
    <CommonTable :header="heading">
      <tr
        v-for="(content, i) in repository.findings.findings"
        :key="i"
        class="hover:bg-white bg-[#F5F7FB] transition-all ease-in-out duration-150"
      >
        <td class="px-5 py-4 whitespace-nowrap pointer-events-none">
          <p></p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
          <p class="font-roboto font-medium text-lg text-lightToBlack">
            {{ content.repository_id }}
          </p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
          <p class="text-sm font-roboto font-bold text-midnightBlue">
            {{ content.source_control }}
          </p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
          <p class="text-sm font-roboto font-medium text-lightToBlack">
            {{ content.repo }}
          </p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
          <p
            class="flex items-center gap-x-[3px] text-sm font-roboto font-medium text-lightGreen"
            :class="
              content.priority < 50
                ? '!text-turquoiseBlue'
                : content.priority < 80
                ? '!text-lawnGreen'
                : content.priority > 80 && 'text-lightGreen'
            "
          >
            <UProgress
              :value="content.priority"
              :color="
                content.priority < 50
                  ? 'turquoiseBlue'
                  : content.priority < 80
                  ? 'lawnGreen'
                  : content.priority > 80 && 'lightGreen'
              "
            />
            {{ content.priority }}
          </p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
          <!-- popup -->
          <UPopover
            class="table_popup"
            :class="content.tags.length < 1 ? 'hidden' : 'block'"
          >
            <div
              label="Open"
              class="bg-[#F3D8A6] flex gap-x-2 pe-2 max-h-[25px] h-full max-w-[119px] rounded-[10px] items-center w-full"
            >
              <p
                class="text-white bg-lawnGreen font-medium font-roboto text-xs px-2 h-full rounded-[10px] w-full text-ellipsis overflow-hidden"
              >
                {{ content.tags[0] }}
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
                      v-for="(tagOption, i) in content.tags"
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
            {{ content.branch }}
          </p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
          <NuxtLink
            class="text-lightToBlack font-roboto font-medium text-xs py-[2px] px-2 bg-hawkasBlue group transition-all ease-in-out duration-300 hover:bg-[#8220FF] rounded-xl flex items-center gap-x-1 justify-center hover:text-white"
            :to="content.link"
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
// new table data
const repository = {
  findings: {
    amount_repositories: 74,
    findings: [
      {
        branch: "documentation",
        link: "https://gitlab.com/plexicus/surface-road",
        priority: 11,
        repo: "plexicus/surface-road",
        repository_id: 19,
        source_control: "Gitlab",
        tags: [],
      },
      {
        branch: "documentation",
        link: "https://github.com/plexicus/poor-draw",
        priority: 59,
        repo: "plexicus/poor-draw",
        repository_id: 82,
        source_control: "Github",
        tags: [
          "Bioinformatics",
          "Game Development",
          "Robotics",
          "Quantum Computing",
        ],
      },
      {
        branch: "main",
        link: "https://github.com/plexicus/role-present",
        priority: 89,
        repo: "plexicus/role-present",
        repository_id: 82,
        source_control: "Github",
        tags: [
          "Machine Learning",
          "Blockchain",
          "Game Development",
          "Big Data",
          "Natural Language Processing",
        ],
      },
      {
        branch: "cleanup",
        link: "https://gitlab.com/plexicus/money-until",
        priority: 26,
        repo: "plexicus/money-until",
        repository_id: 8,
        source_control: "Gitlab",
        tags: [
          "Energy",
          "Financial",
          "Bioinformatics",
          "Artificial Intelligence",
        ],
      },
      {
        branch: "test",
        link: "https://github.com/plexicus/suggest-side",
        priority: 67,
        repo: "plexicus/suggest-side",
        repository_id: 39,
        source_control: "Github",
        tags: ["Web Development", "Game Development"],
      },
      {
        branch: "demo",
        link: "https://gitlab.com/plexicus/pattern-spring",
        priority: 55,
        repo: "plexicus/pattern-spring",
        repository_id: 68,
        source_control: "Gitlab",
        tags: ["Machine Learning", "Augmented Reality"],
      },
      {
        branch: "cleanup",
        link: "https://gitlab.com/plexicus/stage-floor",
        priority: 62,
        repo: "plexicus/stage-floor",
        repository_id: 40,
        source_control: "Gitlab",
        tags: [],
      },
      {
        branch: "refactor",
        link: "https://gitlab.com/plexicus/likely-world",
        priority: 25,
        repo: "plexicus/likely-world",
        repository_id: 77,
        source_control: "Gitlab",
        tags: [
          "Mobile Development",
          "Machine Learning",
          "Natural Language Processing",
          "Financial",
          "Insurance",
        ],
      },
      {
        branch: "cleanup",
        link: "https://github.com/plexicus/order-environmental",
        priority: 69,
        repo: "plexicus/order-environmental",
        repository_id: 90,
        source_control: "Github",
        tags: ["Virtual Reality", "Internet of Things", "Blockchain"],
      },
      {
        branch: "documentation",
        link: "https://gitlab.com/plexicus/tree-quickly",
        priority: 26,
        repo: "plexicus/tree-quickly",
        repository_id: 75,
        source_control: "Gitlab",
        tags: ["Mobile Development"],
      },
    ],
  },
};
</script>
