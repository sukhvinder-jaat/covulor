<template>
  <div>
    <div class="flex justify-between sm:items-center gap-y-5 sm:flex-row flex-col">
      <div class="ps-2.5">
        <h2 class="font-roboto font-bold text-xl sm:text-2xl xl:text-3xl text-midnightBlue tracking-[-.62px] pb-[14px]">
          Command Injection - lastrss.php: 71
        </h2>
        <span
          class="me-[14px] bg-lawnGreen text-center w-[121px] py-1 rounded-full hover:bg-opacity-75 duration-300 text-white font-roboto font-normal text-[13px] inline-block">Code_weakness</span>
        <span
          class="me-[14px] text-center bg-lightBlue w-[121px] py-1 rounded-full hover:bg-opacity-75 duration-300 text-white font-roboto font-normal text-[13px] inline-block">Done</span>
      </div>
      <div class="flex items-center gap-1 ps-2.5 sm:ps-0 xl:pe-10 pe-3">
        <p
          class="font-roboto font-normal xl:text-[25px] lg:text-xl sm:text-lg text-base text-midnightBlue tracking-[-2%]">
          Prioritization Value:
        </p>
        <span class="text-comet font-roboto font-bold lg:text-[25px] sm:text-lg text-base">0/100</span>
      </div>
    </div>
    <div class="sm:p-10 p-5 bg-white flex justify-between md:flex-row flex-col mt-[22px] w-full mb-11">
      <div class="md:w-1/2 md:max-w-[467px] xl:ms-1">
        <h2 class="font-roboto text-midnightBlue font-bold md:text-[28px] text-xl !tracking-[-2%] pb-[15px]">
          AI Remedation
        </h2>
        <p class="font-roboto text-black text-sm font-normal !tracking-[-2%] leading-[19px]">
          I wrapped the content of the file with base64 encoding/decoding to
          prevent injection through unserialize. This operation will ensure that,
          even if an attacker somehow manages to inject malicious code into the
          cache file, it will not be executed when the cache file is read back
          into the program. Instead, any injected code will merely be treated as
          base64 encoded string, not executable code.
        </p>
        <p class="font-bold font-roboto text-xl pt-2 text-purple">More Details</p>
      </div>
      <div class="sm:w-[250px] md:pt-0 pt-5">
        <FindingDetailModal />
        <p class="text-center pt-2.5 tracking-[-.28px] font-roboto font-normal text-purple text-sm">
          LLM Generated Remediations
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
</script>
