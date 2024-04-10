<template>
  <div id="owsap">
    <!-- Heading component with OWASP TOP10 2021 title and hidden attribute -->
    <Heading :icon="owaspLogo" title="OWASP TOP10 2021" :isSubHeading="false" />
    <div
      class="flex flex-wrap max-[1280px]:justify-center md:mt-[50px] desktop:gap-10 xl:gap-y-10 gap-y-6 mt-8 mb-[50px] sm:mb-[75px] md:mb-20 lg:mb-[106px]">
      <div class="xl:w-1/5 md:w-4/12 small:w-6/12 w-full desktop:px-0 xl:px-5 px-3 desktop:max-w-[182px]"
        v-for="(content, index) in topRank" :key="index">
        <div class="w-full h-full min-h-[205px]">
          <!-- Cards component with dynamic title, description, and rank -->
          <Cards :title="content.title" :description="content.description" :rank="content.rank" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Importing necessary functions and components
import { topRank } from "../../utils/helper";
import Heading from "../common/Heading.vue";
import Cards from "./Cards.vue";
import owaspLogo from "/assets/images/logo.png";

const toast = useToast()

const getOwaspTopDataHandler = async () => {
  await fetchRequestHandler(get, `${OWASP_TOP}`);
}

onMounted(async () => {
  try {
    await getOwaspTopDataHandler();
  } catch (e: any) {
    // Display an error toast if an exception occurs
    toast.add({
      title: e.message,
    });
  }
})
</script>
