<template>
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
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.35978 4.66555C9.36024 4.24954 9.04684 3.93786 8.62852 3.93831L5.56087 3.9416L5.56418 0.890817C5.56463 0.474801 5.25123 0.163126 4.83291 0.163575C4.4146 0.164023 4.10052 0.476372 4.10007 0.892388L4.09676 3.94317L1.02911 3.94646C0.61079 3.94691 0.296714 4.25926 0.296262 4.67528C0.296036 4.88329 0.400428 5.05651 0.539716 5.19504C0.679004 5.33356 0.853189 5.43738 1.06235 5.43715L4.13 5.43386L4.12669 8.48464C4.12647 8.69265 4.23086 8.86588 4.37015 9.0044C4.50943 9.14292 4.68362 9.24674 4.89278 9.24652C5.31109 9.24607 5.62517 8.93372 5.62562 8.5177L5.62893 5.46692L8.69658 5.46363C9.04526 5.39392 9.35933 5.08157 9.35978 4.66555Z"
                fill="black"
              />
            </svg>
          </div>

          <template #panel="{ close }">
            <div class="relative">
              <svg
                class="absolute top-[-12%] end-[-7%] cursor-pointer"
                label="Close"
                @click="close"
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_6031_1531)">
                  <circle cx="12" cy="12" r="10" fill="white" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.2105 8.77421C14.915 8.4781 14.4718 8.4781 14.1763 8.77421L12.0095 10.9457L9.84268 8.77421C9.54721 8.4781 9.104 8.4781 8.80852 8.77421C8.51305 9.07032 8.51305 9.51449 8.80852 9.81061L10.9753 11.9821L8.80852 14.1536C8.51305 14.4497 8.51305 14.8939 8.80852 15.19C8.95626 15.3381 9.15324 15.3874 9.35022 15.3874C9.54721 15.3874 9.74419 15.3381 9.89193 15.19L12.0587 13.0185L14.2256 15.19C14.3733 15.3381 14.5703 15.3874 14.7673 15.3874C14.9643 15.3874 15.1612 15.3381 15.309 15.19C15.6044 14.8939 15.6044 14.4497 15.309 14.1536L13.1422 11.9821L15.309 9.81061C15.506 9.51449 15.506 9.07032 15.2105 8.77421Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_6031_1531"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_6031_1531"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_6031_1531"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div class="bg-lawnGreen p-[14px] ps-7 min-w-[154px] rounded-md">
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
          <svg
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.50132 0.273563L4.16392 7.79577L2.92676 4.37608L0 2.19983L8.50132 0.273563Z"
              fill="#8220FF"
              class="transition-all ease-in-out duration-300 group-hover:fill-white"
            />
          </svg>
        </NuxtLink>
      </td>
    </tr>
  </CommonTable>
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
