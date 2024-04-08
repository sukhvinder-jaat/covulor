<template>
  <div class="my-[35px]">
    <CommonTable :header="heading">
      <tr
        v-for="(content, index) in repo.findings.findings"
        :key="index"
        class="hover:bg-white bg-[#F5F7FB] transition-all ease-in-out duration-150 border border-[#D4D7DD]"
      >
        <td class="px-3 py-4 whitespace-nowrap">
          <p class="font-roboto font-medium text-lg text-lightToBlack">
            {{ content.finding_id }}
          </p>
        </td>
        <td class="px-3 py-4 whitespace-nowrap">
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
        <td class="px-3 py-4 whitespace-nowrap">
          <p class="text-sm font-roboto font-medium text-lightToBlack">
            {{ content.title }}
          </p>
        </td>
        <td class="px-3 py-4 whitespace-nowrap">
          <p class="text-sm font-roboto font-medium text-lightToBlack">
            {{ content.supply_chain }}
          </p>
        </td>
        <td class="px-3 py-4 whitespace-nowrap">
          <p class="text-sm font-roboto font-medium text-lightToBlack">
            {{ content.repo }}
          </p>
        </td>
        <td class="px-3 py-4 whitespace-nowrap">
          <p class="text-sm font-roboto font-bold text-midnightBlue">
            {{ content.issue_owner }}
          </p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
          <!-- popup -->
          <UPopover
            class="table_popup"
            :class="content.finding_types.length < 1 ? 'hidden' : 'block'"
          >
            <div
              label="Open"
              class="bg-[#F3D8A6] flex gap-x-2 pe-2 max-h-[25px] h-full max-w-[119px] rounded-[10px] items-center w-full"
            >
              <p
                class="text-white bg-lawnGreen font-medium font-roboto text-xs px-2 h-full rounded-[10px] w-full text-ellipsis overflow-hidden"
              >
                {{ content.finding_types[0] }}
              </p>
              <IconsPlus />
            </div>

            <template #panel="{ close }">
              <div class="relative">
                <span
                  label="Close"
                  @click="close"
                  class="top-[-12px] end-[-7px] absolute cursor-pointer"
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
                      v-for="(tagOption, i) in content.finding_types"
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
        <td class="px-3 py-4 whitespace-nowrap">
          <p
            class="flex items-center gap-x-[3px] text-sm font-roboto font-medium text-lightGreen"
            :class="
              content.confidence < 50
                ? '!text-turquoiseBlue'
                : content.confidence < 80
                ? '!text-lawnGreen'
                : content.confidence > 80 && 'text-lightGreen'
            "
          >
            <UProgress
              :value="content.confidence"
              :color="
                content.confidence < 50
                  ? 'turquoiseBlue'
                  : content.confidence < 80
                  ? 'lawnGreen'
                  : content.confidence > 80 && 'lightGreen'
              "
            />
            {{ content.confidence }}
          </p>
        </td>
        <td class="px-3 py-4 whitespace-nowrap">
          <p class="text-sm font-roboto font-bold text-midnightBlue">
            {{ content.date }}
          </p>
        </td>
        <td class="px-3 py-4 whitespace-nowrap">
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
const repo = {
  findings: {
    amount_scans: 887,
    findings: [
      {
        confidence: 99,
        date: "2021-08-29",
        finding_id: 229,
        finding_types: [],
        issue_owner: "bortega",
        link: "https://bitbucket.com/plexicus/than-animal/other/hundred.mp4",
        priority: 99,
        repo: "plexicus/than-animal",
        supply_chain: "OpenSource Security (SCA)",
        title: "other/hundred.mp4",
      },
      {
        confidence: 74,
        date: "2020-06-20",
        finding_id: 499,
        finding_types: ["Code Weakness"],
        issue_owner: "stewartkimberly",
        link: "https://github.com/plexicus/really-enter/improve/daughter.js",
        priority: 9,
        repo: "plexicus/really-enter",
        supply_chain: "License Compliance",
        title: "improve/daughter.js",
      },
      {
        confidence: 46,
        date: "2020-03-14",
        finding_id: 598,
        finding_types: [
          "XML External Entity (XXE) Injection",
          "Cross-Site Request Forgery (CSRF)",
          "Code Weakness",
          "Broken Access Control",
          "File Inclusion",
        ],
        issue_owner: "jesus81",
        link: "https://github.com/plexicus/month-deal/walk/we.mp4",
        priority: 2,
        repo: "plexicus/month-deal",
        supply_chain: "SAST",
        title: "walk/we.mp4",
      },
      {
        confidence: 62,
        date: "2019-12-30",
        finding_id: 832,
        finding_types: [
          "Insecure Deserialization",
          "Cross-Origin Resource Sharing (CORS) Misconfiguration",
          "Sensitive Data Exposure",
        ],
        issue_owner: "guerreromatthew",
        link: "https://gitlab.com/plexicus/believe-staff/wait/to.pdf",
        priority: 44,
        repo: "plexicus/believe-staff",
        supply_chain: "License Compliance",
        title: "wait/to.pdf",
      },
      {
        confidence: 24,
        date: "2020-11-22",
        finding_id: 836,
        finding_types: ["Security Misconfiguration"],
        issue_owner: "marc15",
        link: "https://bitbucket.com/plexicus/hit-say/small/put.webm",
        priority: 97,
        repo: "plexicus/hit-say",
        supply_chain: "Secrets / PII",
        title: "small/put.webm",
      },
      {
        confidence: 90,
        date: "2019-12-28",
        finding_id: 893,
        finding_types: [
          "Insecure Deserialization",
          "XML External Entity (XXE) Injection",
          "Broken Authentication",
          "Remote Code Execution (RCE)",
          "Sensitive Data Exposure",
        ],
        issue_owner: "william15",
        link: "https://bitbucket.com/plexicus/step-town/plant/glass.mp3",
        priority: 76,
        repo: "plexicus/step-town",
        supply_chain: "License Compliance",
        title: "plant/glass.mp3",
      },
      {
        confidence: 33,
        date: "2020-01-03",
        finding_id: 68,
        finding_types: [
          "SQL Injection",
          "XML External Entity (XXE) Injection",
          "Sensitive Data Exposure",
        ],
        issue_owner: "gjefferson",
        link: "https://gitlab.com/plexicus/reveal-too/conference/quite.wav",
        priority: 92,
        repo: "plexicus/reveal-too",
        supply_chain: "License Compliance",
        title: "conference/quite.wav",
      },
      {
        confidence: 4,
        date: "2022-01-05",
        finding_id: 334,
        finding_types: [
          "Cross-Site Request Forgery (CSRF)",
          "Insecure Direct Object References (IDOR)",
          "Server-Side Request Forgery (SSRF)",
        ],
        issue_owner: "cheryl59",
        link: "https://github.com/plexicus/much-both/nation/throughout.bmp",
        priority: 1,
        repo: "plexicus/much-both",
        supply_chain: "OpenSource Security (SCA)",
        title: "nation/throughout.bmp",
      },
      {
        confidence: 85,
        date: "2023-12-06",
        finding_id: 999,
        finding_types: [
          "Broken Authentication",
          "Injection Attacks",
          "Insecure Deserialization",
          "Security Misconfiguration",
          "SQL Injection",
        ],
        issue_owner: "roy75",
        link: "https://bitbucket.com/plexicus/team-dream/book/international.mov",
        priority: 93,
        repo: "plexicus/team-dream",
        supply_chain: "OpenSource Security (SCA)",
        title: "book/international.mov",
      },
      {
        confidence: 24,
        date: "2021-01-12",
        finding_id: 269,
        finding_types: ["Broken Access Control"],
        issue_owner: "kboone",
        link: "https://gitlab.com/plexicus/government-research/age/board.webm",
        priority: 7,
        repo: "plexicus/government-research",
        supply_chain: "OpenSource Security (SCA)",
        title: "age/board.webm",
      },
    ],
  },
};
</script>
