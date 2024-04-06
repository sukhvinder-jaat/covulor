<template>
  <div>
    <!-- <UButton label="Open" /> -->
    <div class="flex gap-2 w-full justify-end sm:pr-4">
      <p class=" font-roboto text-base sm:text-xl sm:leading-[30px] font-normal text-darkSlateGray">
        Manage
        Repositories</p>
      <div label="Open" @click="isOpen = true"
        class="flex items-center gap-x-2 max-h-[25px] h-full max-w-[119px] rounded-[10px] w-full cursor-pointer">
        <IconsPopupPlus />
      </div>
    </div>
    <UModal v-model="isOpen" :overlay="true" class="relative">
      <Icon @click="isOpen = false" name="i-heroicons-x-mark-20-solid"
        class=" text-black opacity-50 w-6 h-6 cursor-pointer absolute end-0 top-0 mt-2 mr-3" />
      <div class="p-[37px_47px_41px_28px]">
        <p class="font-roboto font-bold text-xl text-purple mb-[23px] pr-[18px]">UPLOAD SCAN</p>
        <hr class="bg-[F2F0F9]" />
        <div class=" mt-4 sm:flex gap-6 items-center justify-between">
          <div class=" w-6/12 flex items-center">
            <input type="radio" id="repo" name="repo" value="30">
            <label for="repo"
              class=" font-roboto font-medium text-lightToBlack text-sm leading-4 tracking-[5%] ps-[5px] cursor-pointer">Select
              Repository</label>
          </div>
          <div class="sm:max-w-[557px] w-full">
            <CommonSelect :options="repositoryID" />
          </div>
        </div>
        <div class="flex justify-end mt-[28px]">
          <UButton class="w-[142px] text-center rounded-none py-3 justify-center">Upload</UButton>
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
const repositoryID = ['1', '2', '3']
const isOpen = ref(false)
</script>