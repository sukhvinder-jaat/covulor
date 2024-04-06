<template>
  <div
    class="flex justify-between sm:items-center gap-y-5 sm:flex-row flex-col"
  >
    <h2
      class="font-roboto font-bold text-xl sm:text-2xl xl:text-3xl text-midnightBlue tracking-[-.62px] ps-2.5"
    >
      Data from importer
    </h2>
    <p
      class="font-roboto font-normal xl:text-[25px] lg:text-xl sm:text-lg text-base text-midnightBlue tracking-[-2%] md:ps-0 ps-2.5 lg:me-20 md:me-4"
    >
      Date: 2024-03-06T0 4:08:00.000Z
    </p>
  </div>
  <div
    class="sm:p-10 p-5 bg-white flex justify-between md:flex-row flex-col mt-[22px] w-full mb-11 md:items-center gap-5"
  >
    <div class="md:w-1/2 md:max-w-[467px] xl:ms-1">
      <h2
        class="font-roboto text-midnightBlue font-bold md:text-[28px] text-xl !tracking-[-2%] pb-[15px]"
      >
        Description
      </h2>
      <p
        class="font-roboto text-black text-sm font-normal !tracking-[-2%] leading-[19px]"
      >
        The function unserialize() used in the 'lastrss.php' script on Line 71
        is building a command from untrusted data. Potentially leading to
        command injection vulnerability. This could occur when the application
        pulls data from an unverified source and integrates it into the command
        string that is then executed. If an attacker is able to control the
        command, they could gain privileges or capabilities that they would not
        usually have, leading to malicious activities such as data leakage,
        unauthorized access or system takeover.
      </p>
    </div>
    <div class="sm:max-w-[435px] xl:me-10 md:ms-5">
      <p
        v-for="(item, index) in dataImpoterList"
        :key="index"
        class="font-roboto font-bold xl:text-xl md:text-lg text-base text-midnightBlue"
      >
        {{ item.title }} <span class="font-normal">{{ item.content }}</span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineComponent } from "vue";

interface DataImpoterList {
  title: string;
  content: string;
}


</script>

