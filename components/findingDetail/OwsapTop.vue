<template>
  <div id="owsap">
    <!-- Heading component with OWASP TOP10 2021 title and hidden attribute -->
    <Heading :icon="owaspLogo" title="OWASP TOP10 2021" :isSubHeading="false" />
    <div
      class="flex flex-wrap max-[1280px]:justify-center md:mt-[50px] desktop:gap-10 xl:gap-y-10 gap-y-6 mt-8 mb-[50px] sm:mb-[75px] md:mb-20 lg:mb-[106px]"
    >
      <div
        class="xl:w-1/5 md:w-4/12 small:w-6/12 w-full desktop:px-0 xl:px-5 px-3 desktop:max-w-[182px]"
        v-for="(content, index) in risks"
        :key="index"
      >
        <div class="w-full h-full min-h-[205px]">
          <!-- Cards component with dynamic title, description, and rank -->
          <div
            class="h-full rounded-2xl"
            :class="
              index % 6 < 3
                ? 'shadow-[0px_0px_30px_0px_#05CB0C3B]'
                : 'shadow-[0px_0px_30px_0px_#FF010157]'
            "
          >
            <OwaspCards
              :title="content.title"
              :description="content.description"
              :rank="content.amount"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Importing necessary functions and components
import Heading from "../common/Heading.vue";
import owaspLogo from "/assets/images/logo.png";
const risks = [
  {
    amount: 25,
    description: "Broken Access Control",
    title: "A01",
  },
  {
    amount: 40,
    description: "Cryptographic Failures",
    title: "A02",
  },
  {
    amount: 50,
    description: "Injection",
    title: "A03",
  },
  {
    amount: 26,
    description: "Insercure Design",
    title: "A04",
  },
  {
    amount: 36,
    description: "Security Misconfiguration",
    title: "A05",
  },
  {
    amount: 39,
    description: "Vulnerable and Outdated Components",
    title: "A06",
  },
  {
    amount: 56,
    description: "Identification and Authentication Failures",
    title: "A07",
  },
  {
    amount: 13,
    description: "Software and Data Integrity Failures",
    title: "A08",
  },
  {
    amount: 97,
    description: "Security Logging and Monitoring Failures",
    title: "A09",
  },
  {
    amount: 8,
    description: "Server Side Request Forgery (SSRF)",
    title: "A10",
  },
];
</script>
