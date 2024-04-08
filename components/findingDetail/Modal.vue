<template>
  <div>
    <div class="UButton_modal">
      <UButton
        class="font-inter font-semibold text-[13px] text-white bg-purple py-2 px-3 sm:px-[17px] sm:py-[10px] rounded-md border border-purple hover:bg-white hover:text-purple transition-all ease-in-out duration-300 leading-[15px]"
        label="Open"
        @click="isOpen = true"
      >
        <span class="font-roboto font-normal text-xl tracking-[-.4px]">
          Create AI Remedation
        </span>
      </UButton>
      <UModal
        v-model="isOpen"
        :overlay="true"
        class="relative common_modal !w-full"
      >
        <Icon
          @click="isOpen = false"
          name="i-heroicons-x-mark-20-solid"
          class="text-black w-6 h-6 cursor-pointer absolute end-0 top-0 mt-2 mr-3"
        />
        <div class="bg-white p-5 md:p-0 md:pb-[57px]">
          <div class="pt-14 md:pt-[92px] md:ps-[79px] md:pr-[70px]">
            <div class="flex gap-3 items-center border-b border-black pb-5">
              <span class="bg-purple w-[26px] h-[26px] rounded-[50%]"></span>
              <p class="font-roboto text-[30px] leading-9 font-bold text-black">
                Details
              </p>
            </div>
            <p
              class="font-roboto text-xl md:text-[30px] leading-[120%] md:leading-9 font-bold text-black mt-[23px] max-w-[600px]"
            >
              [Asset plexicus/-OWASPWebGoatPHP] Command Injection - lastrss.php:
              71
            </p>
            <p
              class="font-roboto text-xl leading-9 font-normal mt-4 border-b border-black pb-3"
            >
              Ready
            </p>
            <p
              class="font-roboto text-sm sm:text-base font-normal text-black leading-[120%] sm:leading-5 mt-[18px]"
            >
              I wrapped the content of the file with base64 encoding/decoding to
              prevent injection through unserialize. This operation will ensure
              that, even if an attacker somehow manages to inject malicious code
              into the cache file, it will not be executed when the cache file
              is read back into the program. Instead, any injected code will
              merely be treated as base64 encoded string, not executable code.
            </p>
            <p
              class="font-roboto text-sm sm:text-base font-normal text-black leading-[120%] sm:leading-5 py-5"
            >
              The recommendation for future developments is to never trust
              external inputs or have them in a place where they could somehow
              be executed. Instead, it would be better always to store a
              serialized form of the data and apply the necessary
              encoding/decoding steps on read/write operations.
            </p>
            <p
              class="font-roboto text-sm sm:text-base font-normal text-black leading-[120%] sm:leading-5"
            >
              Note that the base64_encode() and base64_decode() functions used
              here are part of native PHP, so they don't require importing any
              external libraries.
            </p>

            <p
              class="font-roboto text-xl font-normal text-black leading-5 border-b border-black pb-3 border-opacity-[30%] mt-[18px]"
            >
              Code
            </p>
          </div>
          <img
            src="/public/assets/images/finding-detail-modal/captura-de-pantalla.webp"
            alt="captura-de-pantalla"
            class="lg:max-w-[1001px] w-full lg:min-h-[312px] px-4 lg:px-0 lg:ps-8 mt-7"
          />
          <div class="flex justify-end max-w-[1001px] px-4 lg:px-0">
            <UButton
              class="!font-roboto font-normal !text-xl text-white bg-purple py-3 px-4 sm:px-[22px] sm:py-[5px] mt-10 md:mt-[71px] !rounded-[0px] border border-purple hover:bg-white hover:text-purple transition-all ease-in-out duration-300 leading-9"
            >
              Send Pull Request
            </UButton>
          </div>
        </div>
      </UModal>
    </div>
  </div>
</template>
<script setup lang="ts">
const isOpen = ref(false);
</script>
<style>
.common_modal [data-headlessui-state="open"] {
  max-width: 1102px !important;
  width: 100% !important;
}
</style>
